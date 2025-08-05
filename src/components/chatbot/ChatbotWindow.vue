<!-- src/components/chatbot/ChatbotWindow.vue -->
<template>
  <div class="chatbot-window">
    <div class="chat-history" ref="chatHistoryRef">
      <!-- 메시지 목록 -->
      <template v-for="msg in messages" :key="msg.id">
        <ChatMessage
            :role="msg.role"
            :content="msg.content"
            :highlight-mode="msg.highlightMode"
            :image-url="msg.imageUrl"
        />
      </template>

      <!-- 버튼 목록을 채팅 기록 안으로 이동 -->
      <div class="button-area" v-if="latestQuestions.length > 0">
        <ChatButtonList
            :questions="latestQuestions"
            @select="handleSelect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChatMessage from '@/components/chatbot/ChatMessage.vue';
import ChatButtonList from '@/components/chatbot/ChatButtonList.vue';
import { getBotAnswer } from '@/services/chatbotService.js';
import { questionList } from '@/constants/questionList.js';
import { rehabCategories, seoulAddictionCenters, nationwideDrugCenters } from '@/constants/rehabData.js';
import { counselingProvinces, counselingSubRegions, counselingCenterData } from '@/constants/counselingData.js';

export default {
  components: {
    ChatMessage,
    ChatButtonList,
  },
  data() {
    return {
      messages: [],
      idCounter: 0,
      currentCategory: null, // <<< [수정 1] 사용자의 카테고리 선택을 기억할 상태 변수 추가
    };
  },
  computed: {
    latestQuestions() {
      for (let i = this.messages.length - 1; i >= 0; i--) {
        const msg = this.messages[i];
        if (msg.questions && msg.questions.length > 0) {
          return msg.questions;
        }
      }
      return [];
    },
  },
  mounted() {
    this.addMessage('bot', '안녕하세요 챗봇입니다!\n무엇을 도와드릴까요?', { questions: questionList });
    this.resetLastButtonScroll();
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const el = this.$refs.chatHistoryRef;
        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      });
    },
    addMessage(role, content, options = {}) {
      this.messages.push({
        id: this.idCounter++,
        role,
        content,
        ...options,
      });
      this.scrollToBottom();
    },
    async displayFinalCard(centersData, defaultMessage) {
      if (centersData && Array.isArray(centersData) && centersData.length > 0) {
        centersData.forEach(center => {
          let cardContent =
              `${center.name}\n\n` +
              `[주소] : ${center.address}\n\n` +
              `[연락처] : ${center.contact}`;

          if (center.website) {
            cardContent += `\n\n[홈페이지] : ${center.website}`;
          }
          this.addMessage('bot', cardContent, {});
        });
      } else {
        this.addMessage('bot', defaultMessage);
      }
      this.addMessage('bot', '다른 궁금한 점이 있으신가요?', { questions: questionList });
      this.resetLastButtonScroll();
    },
    getParticle(word) {
      if (typeof word !== 'string' || word.length === 0) {
        return '가';
      }
      const pureWord = word.replace(/<[^>]*>?/g, '');
      const lastChar = pureWord.charCodeAt(pureWord.length - 1);
      if (lastChar < 0xac00 || lastChar > 0xd7a3) {
        return '가';
      }
      const hasJongseong = (lastChar - 0xac00) % 28 > 0;
      return hasJongseong ? '이' : '가';
    },
    async resetLastButtonScroll() {
      await this.$nextTick();
      const allButtonContainers = this.$el.querySelectorAll('.button-list-container');
      if (allButtonContainers.length > 0) {
        const lastButtonContainer = allButtonContainers[allButtonContainers.length - 1];
        if (lastButtonContainer) {
          lastButtonContainer.scrollLeft = 0;
        }
      }
    },
    async handleSelect(selectedItem) {
      if (!selectedItem || !selectedItem.label) {
        console.error('handleSelect: 잘못된 selectedItem 객체입니다.', selectedItem);
        return;
      }
      const userQueryText = selectedItem.label;
      const particle = this.getParticle(userQueryText);
      this.addMessage('user', `"${userQueryText}"${particle} 궁금해요`);

      const { action, key, label, source } = selectedItem;

      if (!action) {
        if (key === '재활 센터') {
          this.addMessage('bot', '어떤 기관을 안내해 드릴까요?', { questions: rehabCategories });
        } else if (key === '치료 기관') {
          this.addMessage('bot', '안내를 원하시는 권역을 선택해주세요.', { questions: counselingProvinces });
        } else {
          const rawAnswer = getBotAnswer(key);
          const highlightMode = key === '신고 방법' ? 'subheadings_only' : 'numbered';
          this.addMessage('bot', rawAnswer, { questions: questionList, highlightMode });
        }
        this.resetLastButtonScroll();
        return;
      }

      switch (action) {
        case 'select_category': {
          this.currentCategory = key; // <<< [수정 2] 사용자가 선택한 카테고리(key)를 저장합니다.
          const nextQuestions = key === 'addiction_center' // <<< [수정 3] 'addiction_seoul'이 아닌 정확한 key 'addiction_center'로 확인합니다.
              ? seoulAddictionCenters.buttons
              : nationwideDrugCenters.provinces;
          const message = '안내를 원하시는 권역을 선택해주세요.'; // 메시지를 좀 더 범용적으로 변경
          this.addMessage('bot', message, { questions: nextQuestions });
          this.resetLastButtonScroll();
          break;
        }

        case 'select_province':
        case 'select_counseling_province': {
          // <<< [수정 4] 'nationwideDrugCenters'로 하드코딩된 부분을 동적으로 변경합니다.
          let subRegionsSource, dataSource;

          if (action === 'select_counseling_province') {
            subRegionsSource = counselingSubRegions;
            dataSource = counselingCenterData;
          } else { // 'select_province'일 경우
            if (this.currentCategory === 'addiction_center') {
              // 중독관리센터를 선택했을 경우, seoulAddictionCenters 데이터를 사용
              subRegionsSource = seoulAddictionCenters.subRegions;
              dataSource = seoulAddictionCenters.data;
            } else {
              // 그 외 (한걸음센터 등)의 경우, nationwideDrugCenters 데이터를 사용
              subRegionsSource = nationwideDrugCenters.subRegions;
              dataSource = nationwideDrugCenters.data;
            }
          }

          const subRegions = subRegionsSource[label];

          if (subRegions) {
            this.addMessage('bot', `${label}의 하위 지역을 선택해주세요.`, { questions: subRegions });
            this.resetLastButtonScroll();
          } else {
            const centersData = dataSource[label] || [];
            const defaultMsg = '해당 지역의 정보가 아직 등록되지 않았습니다.';
            await this.displayFinalCard(centersData, defaultMsg);
          }
          break;
        }

        case 'show_final_info':
        case 'show_counseling_info': {
          let centersData = [];
          let defaultMsg = '';

          if (action === 'show_counseling_info') {
            centersData = counselingCenterData[label] || [];
            defaultMsg = '해당 지역의 치료기관 정보가 아직 등록되지 않았습니다.';
          } else {
            // <<< [수정 5] 'seoul_addiction'이 아닌 정확한 source 'addiction_center'로 확인합니다.
            centersData = (source === 'addiction_center'
                ? seoulAddictionCenters.data[label]
                : nationwideDrugCenters.data[label]) || [];
            defaultMsg = '해당 지역의 재활기관 정보가 아직 등록되지 않았습니다.';
          }

          await this.displayFinalCard(centersData, defaultMsg);
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
/* 스타일은 변경되지 않았습니다. */
.chatbot-window {
  display: flex;
  flex-direction: column;
  height: 600px;
  max-width: 500px;
  margin: 0 auto;
  border: none;
  border-radius: 8px;
  overflow: hidden;
}
.chat-history {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px;
}
.button-area {
  padding-top: 12px;
}
:deep(.chat-message.bot .message-bubble) {
  max-width: 350px;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>

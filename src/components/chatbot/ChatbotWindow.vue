<template>
  <div class="chatbot-window">
    <div class="chat-history" ref="chatHistoryRef">
      <template v-for="msg in messages" :key="msg.id">
        <ChatMessage
            :role="msg.role"
            :content="msg.content"
            :highlight-mode="msg.highlightMode"
            :image-url="msg.imageUrl"
        />
      </template>
    </div>
    <div class="button-area" v-if="latestQuestions.length > 0">
      <ChatButtonList
          :questions="latestQuestions"
          @select="handleSelect"
      />
    </div>
  </div>
</template>

<!--<script setup>
// --- Vue Core & Components ---
import { ref, onMounted, nextTick, computed } from 'vue';
import ChatMessage from '@/components/chatbot/ChatMessage.vue';
import ChatButtonList from '@/components/chatbot/ChatButtonList.vue';

// --- Services & Data ---
import { getBotAnswer } from '@/services/chatbotService.js';
import { questionList } from '@/constants/questionList.js';
import { rehabCategories, seoulAddictionCenters, nationwideDrugCenters } from '@/constants/rehabData.js';
import { counselingProvinces, counselingSubRegions, counselingCenterData } from '@/constants/counselingData.js';

// --- State Management ---
const messages = ref([]);
const chatHistoryRef = ref(null);
let idCounter = 0;

const latestQuestions = computed(() => {
  const lastMessageWithQuestions = [...messages.value]
      .reverse()
      .find(msg => msg.questions && msg.questions.length > 0);
  return lastMessageWithQuestions ? lastMessageWithQuestions.questions : [];
});

// --- Helper Functions ---
const scrollToBottom = async () => {
  await nextTick();
  if (chatHistoryRef.value) {
    chatHistoryRef.value.scrollTop = chatHistoryRef.value.scrollHeight;
  }
};

const addMessage = (role, content, options = {}) => {
  messages.value.push({
    id: idCounter++,
    role,
    content,
    ...options
  });
  scrollToBottom();
};

async function displayFinalCard(centerData, defaultMessage) {
  if (centerData) {
    const cardContent =
        `${centerData.name}\n\n` +
        `[주소] ${centerData.address}\n\n` +
        `[연락처] ${centerData.contact}\n`;
    addMessage('bot', cardContent, { imageUrl: centerData.imageUrl });
  } else {
    addMessage('bot', defaultMessage);
  }

  addMessage('bot', '다른 궁금한 점이 있으신가요?', { questions: questionList });
}

function getParticle(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return '가';
  }
  const pureWord = word.replace(/<[^>]*>?/g, '');
  const lastChar = pureWord.charCodeAt(pureWord.length - 1);
  if (lastChar < 0xAC00 || lastChar > 0xD7A3) {
    return '가';
  }
  const hasJongseong = (lastChar - 0xAC00) % 28 > 0;
  return hasJongseong ? '이' : '가';
}

// --- Lifecycle Hook ---
onMounted(() => {
  addMessage(
      'bot',
      '안녕하세요 챗봇입니다!\n어떻게 도와드릴까요?',
      { questions: questionList }
  );
});

// --- Main Event Handler ---
async function handleSelect(selectedItem) {
  if (!selectedItem || !selectedItem.label) {
    console.error('handleSelect: 잘못된 selectedItem 객체입니다.', selectedItem);
    return;
  }

  const userQueryText = selectedItem.label;
  const particle = getParticle(userQueryText);
  addMessage('user', `"${userQueryText}"${particle} 궁금해요`);

  const { action, key, label, source } = selectedItem;

  // 1. 초기 질문 처리
  if (!action) {
    if (key === '재활 센터') {
      addMessage('bot', '어떤 기관을 안내해 드릴까요?', { questions: rehabCategories });
    } else if (key === '치료 기관') {
      addMessage('bot', '안내를 원하시는 권역을 선택해주세요.', { questions: counselingProvinces });
    } else {
      const rawAnswer = getBotAnswer(key);
      const highlightMode = key === '신고 방법' ? 'subheadings_only' : 'numbered';
      addMessage('bot', rawAnswer, { questions: questionList, highlightMode: highlightMode });
    }
    return;
  }

  // 2. 흐름 처리
  switch (action) {
    case 'select_category': {
      const nextQuestions = key === 'addiction_seoul' ? seoulAddictionCenters.buttons : nationwideDrugCenters.provinces;
      const message = key === 'addiction_seoul'
          ? '서울시 중독관리통합센터 안내입니다. 원하시는 지역구를 선택해주세요.'
          : '전국 마약퇴치 운동센터 안내입니다. 원하시는 도(道)를 선택해주세요.';
      addMessage('bot', message, { questions: nextQuestions });
      break;
    }

    case 'select_province':
    case 'select_counseling_province': {
      const subRegions = action === 'select_province' ? nationwideDrugCenters.subRegions[label] : counselingSubRegions[label];

      if (Array.isArray(subRegions) && subRegions.length === 1) {
        const singleRegion = subRegions[0];
        const centerData = action === 'select_province'
            ? nationwideDrugCenters.data[singleRegion.label]
            : counselingCenterData[singleRegion.label];
        const defaultMsg = action === 'select_province'
            ? '해당 지역의 재활기관 정보가 아직 등록되지 않았습니다.'
            : '해당 지역의 치료기관 정보가 아직 등록되지 않았습니다.';
        await displayFinalCard(centerData, defaultMsg);
      } else {
        addMessage('bot', `${label}의 하위 지역을 선택해주세요.`, { questions: subRegions || [] });
      }
      break;
    }

    case 'show_final_info':
    case 'show_counseling_info': {
      const centerData = source === 'seoul_addiction'
          ? seoulAddictionCenters.data[label]
          : nationwideDrugCenters.data[label] || counselingCenterData[label];
      const defaultMsg = action === 'show_final_info'
          ? '해당 지역의 재활기관 정보가 아직 등록되지 않았습니다.'
          : '해당 지역의 치료기관 정보가 아직 등록되지 않았습니다.';
      await displayFinalCard(centerData, defaultMsg);
      break;
    }
  }
}
</script>-->

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
    };
  },
  computed: {
    latestQuestions() {
      // 최신 질문 있는 메시지 찾아서 질문 반환
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
    async displayFinalCard(centerData, defaultMessage) {
      if (centerData) {
        const cardContent =
            `${centerData.name}\n\n` +
            `[주소] ${centerData.address}\n\n` +
            `[연락처] ${centerData.contact}\n`;
        this.addMessage('bot', cardContent, { imageUrl: centerData.imageUrl });
      } else {
        this.addMessage('bot', defaultMessage);
      }
      this.addMessage('bot', '다른 궁금한 점이 있으신가요?', { questions: questionList });
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
        return;
      }

      switch (action) {
        case 'select_category': {
          const nextQuestions = key === 'addiction_seoul' ? seoulAddictionCenters.buttons : nationwideDrugCenters.provinces;
          const message = key === 'addiction_seoul'
              ? '서울시 중독관리통합센터 안내입니다. 원하시는 지역구를 선택해주세요.'
              : '전국 마약퇴치 운동센터 안내입니다. 원하시는 도(道)를 선택해주세요.';
          this.addMessage('bot', message, { questions: nextQuestions });
          break;
        }
        case 'select_province':
        case 'select_counseling_province': {
          const subRegions = action === 'select_province' ? nationwideDrugCenters.subRegions[label] : counselingSubRegions[label];

          if (Array.isArray(subRegions) && subRegions.length === 1) {
            const singleRegion = subRegions[0];
            const centerData = action === 'select_province'
                ? nationwideDrugCenters.data[singleRegion.label]
                : counselingCenterData[singleRegion.label];
            const defaultMsg = action === 'select_province'
                ? '해당 지역의 재활기관 정보가 아직 등록되지 않았습니다.'
                : '해당 지역의 치료기관 정보가 아직 등록되지 않았습니다.';
            await this.displayFinalCard(centerData, defaultMsg);
          } else {
            this.addMessage('bot', `${label}의 하위 지역을 선택해주세요.`, { questions: subRegions || [] });
          }
          break;
        }
        case 'show_final_info':
        case 'show_counseling_info': {
          const centerData = source === 'seoul_addiction'
              ? seoulAddictionCenters.data[label]
              : nationwideDrugCenters.data[label] || counselingCenterData[label];
          const defaultMsg = action === 'show_final_info'
              ? '해당 지역의 재활기관 정보가 아직 등록되지 않았습니다.'
              : '해당 지역의 치료기관 정보가 아직 등록되지 않았습니다.';
          await this.displayFinalCard(centerData, defaultMsg);
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
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
  flex-shrink: 0;
  padding: 12px;
  border-top: 1px solid #e0e0e0;
  background-color: #f9f9f9;
}
</style>

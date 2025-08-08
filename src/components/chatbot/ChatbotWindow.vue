<!-- src/components/chatbot/ChatbotWindow.vue -->
<template>

  <div class="chatbot-window">
    <!-- 메시지들이 스크롤되는 대화 내용 영역 -->
    <div class="chat-history" ref="chatHistoryRef">
      <!-- 메시지 배열(messages)을 반복하며 ChatMessage 컴포넌트로 하나씩 표시함 -->
      <template v-for="msg in messages" :key="msg.id">
        <ChatMessage
            :role="msg.role"
            :content="msg.content"
            :highlight-mode="msg.highlightMode"
            :image-url="msg.imageUrl"
            @navigate="goToSurveyPage"
        />
      </template>

      <!-- 사용자가 선택할 수 있는 버튼 목록 -->
      <div class="button-area" v-if="latestQuestions.length > 0">
        <ChatButtonList
            :questions="latestQuestions"
            @select="handleSelect"
        />
      </div>
    </div>
    <!-- 앱의 하단 네비게이션 바 -->
    <NavigationBar />
  </div>
</template>

<script> // 챗봇의 모든 데이터와 기능(로직)을 관리함.

import ChatMessage from '@/components/chatbot/ChatMessage.vue';
import ChatButtonList from '@/components/chatbot/ChatButtonList.vue';
import { getBotAnswer } from '@/services/chatbotService.js';
import { questionList } from '@/constants/questionList.js';
import { rehabCategories, seoulAddictionCenters, nationwideDrugCenters } from '@/constants/rehabData.js';
import { counselingProvinces, counselingSubRegions, counselingCenterData } from '@/constants/counselingData.js';
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  // 이 컴포넌트 안에서 사용할 다른 컴포넌트들을 등록함.
  components: {
    NavigationBar,
    ChatMessage,
    ChatButtonList,
  },

  // 챗봇의 상태(대화 기록, 사용자 선택 등)를 저장하는 데이터.
  data() {
    return {
      messages: [],
      idCounter: 0,
      currentCategory: null,
    };
  },

  // data를 기반으로 실시간으로 계산되는 값.
  computed: {
    // 대화 내용 중에서 가장 마지막에 있는 질문 버튼 목록을 찾아냄.
    latestQuestions() {
      // ...
    },
  },

  // 컴포넌트가 화면에 처음 나타났을 때 실행되는 초기화 로직.
  mounted() {
    this.addMessage('bot', '안녕하세요 챗봇입니다!\n무엇을 도와드릴까요?', { questions: questionList });
    this.resetLastButtonScroll();
  },

  // 컴포넌트의 주요 기능들을 정의하는 함수(메소드)들.
  methods: {
    // '자가진단' 링크를 클릭하면 해당 페이지로 이동시킴.
    goToSurveyPage() {
      this.$router.push('SurveyMain');
    },

    // 새 메시지가 추가될 때마다 화면 스크롤을 맨 아래로 내림.
    scrollToBottom() {
    },

    // 대화 배열(messages)에 새로운 메시지를 추가하는 함수.
    addMessage(role, content, options = {}) {
    },

    // 최종 결과(기관 정보)를 보기 좋은 카드 형태로 만들어 출력하는 함수.
    async displayFinalCard(centersData, defaultMessage) {

    },

    // 단어 뒤에 붙는 조사 '이/가'를 문법에 맞게 선택해주는 유틸리티 함수.
    getParticle(word) {
    },

    // 가로로 스크롤되는 버튼 목록의 스크롤 위치를 맨 처음으로 되돌림.
    async resetLastButtonScroll() {
    },

    // 사용자가 버튼을 클릭했을 때(@select), 그 선택에 따라 다음 행동을 결정함.
    async handleSelect(selectedItem) {
      // 사용자의 선택을 채팅창에 표시하고,
      // 선택한 버튼의 정보(action, key 등)를 바탕으로 switch 문을 통해 분기 처리.
      // 각 case에 따라 다음 질문을 보여주거나, 답변을 찾거나, 최종 정보를 표시함.
      const { action, key, label, source } = selectedItem;
    }
  }
};
</script>

<style scoped>

/* 챗봇 창 전체의 크기와 기본 레이아웃을 정의. */
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

/* 메시지들이 보이는 스크롤 영역의 디자인을 정의. */
.chat-history {
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 15px;
  padding-bottom: 80px; // 하단 바에 버튼이 가려져 새로 추가.
}

/* 질문 버튼 목록이 있는 영역의 위쪽 여백을 설정함. */
.button-area {
  padding-top: 12px;
}

/* 자식 컴포넌트(ChatMessage) 내부의 스타일을 직접 수정하기 위해 사용함. */
:deep(.chat-message.bot .message-bubble) {
  max-width: 350px;
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>

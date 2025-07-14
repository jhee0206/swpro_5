<!--
  [ ChatbotWindow.vue ]
  - 챗봇 UI의 최상위 컨테이너 컴포넌트.
  - 전체 대화 내용(State)을 관리하고, 자식 컴포넌트(View)를 지휘하는 핵심 로직 포함.
-->
<template>
  <div class="chatbot-window">
    <!-- 대화 기록 표시 영역 -->
    <div class="chat-history">
      <!--
        - 메시지 배열 순회 및 각 대화 턴(메시지 + 버튼) 렌더링.
        - <template> 태그는 실제 HTML 요소로 렌더링되지 않는 논리적 그룹핑 역할.
      -->
      <template v-for="(msg, idx) in messages" :key="idx">

        <!-- 자식 컴포넌트 1: 메시지 말풍선 렌더링 -->
        <!-- props를 통해 자식에게 데이터 전달. (role, content, highlightMode) -->
        <ChatMessage
            :role="msg.role"
            :content="msg.content"
            :highlight-mode="msg.highlightMode"
        />

        <!-- 자식 컴포넌트 2: 버튼 목록 렌더링 -->
        <!-- v-if: 메시지 객체에 'questions' 배열이 있을 경우에만 표시. -->
        <!-- @select: 자식의 'select' 이벤트를 수신하여 'handleSelect' 메소드 실행. -->
        <ChatButtonList
            v-if="msg.questions && msg.questions.length > 0"
            :questions="msg.questions"
            @select="handleSelect"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
// --- [ 1. 모듈 임포트 ] ---
import { ref, onMounted } from 'vue';
import ChatMessage from './ChatMessage.vue';
import ChatButtonList from './ChatButtonList.vue';
import { getBotAnswer } from '@/services/chatbotService.js';
import { questionList } from '@/constants/questionList.js';


// --- [ 2. 반응형 상태(State) 정의 ] ---
// ref(): Vue의 반응형 시스템이 추적할 수 있는 상태 변수 생성.
// 이 배열의g 내용이 변경되면, <template> 부분의 UI가 자동으로 업데이트됨.
const messages = ref([]);


// --- [ 3. 라이프사이클 훅(Lifecycle Hook) ] ---
// onMounted: 컴포넌트가 화면에 처음 렌더링된 직후 한 번만 실행되는 함수.
onMounted(() => {
  // 초기 챗봇 인사말과 첫 버튼 목록을 messages 상태에 추가.
  messages.value.push({
    role: 'bot',
    content: '안녕하세요 챗봇입니다!\n어떻게 도와드릴까요? 궁금한 점이 있으면 언제든지 물어보세요!',
    questions: questionList
  });
});


// --- [ 4. 헬퍼 함수(Helper Function) ] ---
/**
 * 한글 단어의 받침 유무에 따른 조사('이'/'가') 계산.
 * @param {string} word - 검사할 단어.
 * @returns {'이'|'가'} - 계산된 조사.
 */
function getParticle(word) {
  const lastChar = word.charCodeAt(word.length - 1);
  if (lastChar < 0xAC00 || lastChar > 0xD7A3) return '가';
  const hasJongseong = (lastChar - 0xAC00) % 28 > 0;
  return hasJongseong ? '이' : '가';
}


// --- [ 5. 메인 이벤트 핸들러(Event Handler) ] ---
/**
 * ChatButtonList에서 'select' 이벤트 발생 시 실행되는 메인 로직.
 * @param {object} selectedQuestion - 사용자가 클릭한 버튼의 객체.
 */
function handleSelect(selectedQuestion) {
  // 5-1. 기존 버튼 목록 제거
  messages.value.forEach(msg => {
    if (msg.questions && msg.questions.length > 0) {
      msg.questions = [];
    }
  });

  // 5-2. 사용자 선택 메시지 생성 및 추가
  const userQueryText = selectedQuestion.label;
  const particle = getParticle(userQueryText);
  messages.value.push({
    role: 'user',
    content: `<strong>${userQueryText}</strong>${particle} 궁금해요`
  });

  // 5-3. 서비스 로직 호출: 챗봇 답변 데이터 요청
  const rawAnswer = getBotAnswer(selectedQuestion.key);

  // '신고 방법'일 때만 다른 강조 모드를 지정
  const highlightMode = selectedQuestion.key === '신고 방법' ? 'subheadings_only' : 'numbered';

  // 5-5. 챗봇 답변 메시지 생성 및 추가
  messages.value.push({
    role: 'bot',
    content: rawAnswer,
    questions: questionList,
    highlightMode: highlightMode // 계산된 강조 모드를 전달
  });
}

</script>

<style scoped>
/* 최상위 챗봇 창 스타일 정의. */
.chatbot-window {
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 8px;
}

/* 대화 기록 영역 스타일 정의. */
.chat-history {
  height: 600px;
  /* `overflow-y: auto`로 내용이 영역을 벗어나면 세로 스크롤바 자동 생성. */
  overflow-y: auto;
}
</style>

<!-- src/components/chatbot/ChatButtonList.vue -->
<template>

  <div class="button-list-container">
    <button
        v-for="question in questions"
        :key="question.key || question.label"
        class="chat-button"
        @click="handleSelect(question)"
    >
      {{ question.label }}
    </button>
  </div>
</template>

<script>

export default {
  name: 'ChatButtonList',

  // 부모 컴포넌트(ChatbotWindow)로부터 표시할 질문 버튼들의 배열을 전달받음.
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },

  // 버튼을 클릭하면, 선택된 질문 정보를 부모 컴포넌트에게 'select'라는 신호로 전달함.
  methods: {
    handleSelect(question) {
      this.$emit('select', question);
    },
  },
};
</script>

<style scoped>

/* 버튼들을 가로로 배치하고, 내용이 넘칠 경우 스크롤이 가능하도록 설정함. */
.button-list-container {
  display: flex;
  gap: 10px;
  padding: 8px 2px;
  overflow-x: auto;
}

/* 다양한 브라우저에서 가로 스크롤바가 보이지 않도록 숨김 처리. */
.button-list-container::-webkit-scrollbar {
  display: none;
}
.button-list-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* 개별 버튼의 모양, 색상, 글꼴 등 기본 디자인을 정의함. */
/* (flex-shrink: 0 와 white-space: nowrap; 은 버튼의 크기와 텍스트가 깨지지 않도록 보장) */
.chat-button {
  border-radius: 25px;
  background-color: #cceeff;
  color: #000000;
  border: 1px solid #aaddff;
  padding: 4px 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

/* 마우스를 올리거나 클릭(터치)했을 때의 시각적 효과를 정의. */
.chat-button:hover {
  background-color: #b8e2f5;
  border-color: #a0d0f0;
  transform: translateY(-1px);
}
.chat-button:active {
  transform: scale(0.98);
}
</style>

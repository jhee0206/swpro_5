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
  props: {
    questions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSelect(question) {
      this.$emit('select', question);
    },
  },
};
</script>

<style scoped>
.button-list-container {
  display: flex;
  gap: 10px;
  padding: 8px 2px;
  overflow-x: auto; /* 내용이 넘칠 경우 가로 스크롤을 활성화합니다. */
}


.button-list-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
.button-list-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}


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
  flex-shrink: 0; /* 버튼이 컨테이너 크기에 맞춰 줄어들지 않도록 설정. */
  white-space: nowrap; /* 버튼 내의 텍스트가 줄바꿈되지 않도록. */
}

.chat-button:hover {
  background-color: #b8e2f5;
  border-color: #a0d0f0;
  transform: translateY(-1px);
}

.chat-button:active {
  transform: scale(0.98);
}
</style>
<template>
  <div class="button-list-container">
    <button
        v-for="question in questions"
        :key="question.key || question.label"
        :class="['chat-button', { active: isActive(question) }]"
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
  data() {
    return {
      activeKey: null, // 현재 활성화된 버튼
    };
  },
  methods: {
    handleSelect(question) {
      this.activeKey = question.key || question.label; // 활성화 표시
      this.$emit('select', question);
    },
    isActive(question) {
      return this.activeKey === (question.key || question.label);
    },
  },
};
</script>

<style scoped>
.button-list-container {
  display: flex;
  gap: 10px;
  padding: 8px 2px;
  overflow-x: auto;
  font-family: 'Pretendard', serif;
}

.button-list-container::-webkit-scrollbar {
  display: none;
}
.button-list-container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.chat-button {
  border-radius: 25px;
  background-color: #DEDEDE; /* 비활성 상태 */
  color: #000000;
  border: 1px solid #C2C2C2;
  padding: 4px 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
  white-space: nowrap;
}

.chat-button.active {
  background-color: #23ADB4; /* 활성 상태 */
  color: #FFFFFF;
  border-color: #23ADB4;
}

.chat-button:hover {
  transform: translateY(-1px);
}

.chat-button:active {
  transform: scale(0.98);
}
</style>

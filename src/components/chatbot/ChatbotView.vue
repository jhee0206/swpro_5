<!-- src/views/ChatbotView.vue -->
<template>
  <div>
    <div class="title-container">
      <!-- 뒤로가기 화살표 버튼 -->
      <div class="back-button" @click="goToCardNewsMain">
        <span class="arrow">&larr;</span>
      </div>

      <!-- 제목 텍스트 -->
      <p>챗봇에게 물어보세요!</p>
    </div>

    <!-- 챗봇 창 컴포넌트 -->
    <div>
      <ChatbotWindow />
    </div>
  </div>
</template>

<script>
import ChatbotWindow from '@/components/chatbot/ChatbotWindow.vue';

export default {
  name: 'ChatbotView',
  components: {
    ChatbotWindow,
  },
  methods: {
    goToCardNewsMain() {
      if (this.$router) {
        this.$router.push({ name: 'CardNewsMain' });
      } else {
        console.error('Vue Router is not configured.');
      }
    },
  },
};
</script>

<style scoped>
.title-container {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 16px;
  color: black;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(to right, #007bff, #87cefa);
  border-image-slice: 1;
}

/* 제목 텍스트 스타일 */
.title-container p {
  margin: 0;
  font-size: 22px; /* 글씨 크기 키움 */
  font-weight: 600; /* 굵은 글씨 */
  color: #2c3e50; /* 약간 톤 다운된 색상 */
}

/* 화살표 버튼 스타일 */
.back-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.arrow {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  transition: color 0.2s;
}

.back-button:hover .arrow {
  color: #0056b3;
}
</style>

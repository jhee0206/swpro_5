<!-- src/views/ChatbotView.vue -->
<template>

  <div>
    <!-- 페이지 상단 제목과 뒤로가기 버튼 -->
    <div class="title-container">
      <div class="back-button" @click="goToCardNewsMain">
        <span class="arrow">&larr;</span>
      </div>
      <p>챗봇에게 물어보세요!</p>
    </div>

    <!-- 실제 대화가 이루어지는 챗봇 창 -->
    <div>
      <ChatbotWindow />
    </div>
  </div>
</template>

<script>
import ChatbotWindow from '@/components/chatbot/ChatbotWindow.vue';

export default {
  components: {
    ChatbotWindow,
  },

  methods: {
// 뒤로가기 버튼을 누르면 'CardNewsMain' 페이지로 이동시키는 함수.
    goToCardNewsMain() {
      this.$router.push({ name: 'CardNewsMain' });
    },
  },
};
</script>

<style scoped>

/* 제목 영역의 전체적인 레이아웃과 디자인을 정의. */
.title-container {
  width: 100%;
  box-sizing: border-box;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(to right, #007bff, #87cefa);
  border-image-slice: 1;
}

/* "챗봇에게 물어보세요!" 제목 텍스트의 글씨 크기, 굵기, 색상을 지정. */
.title-container p {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
}

/* 뒤로가기 버튼과 화살표의 모양, 동작을 정의. */
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

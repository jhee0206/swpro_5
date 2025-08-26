<!-- src/views/ChatbotView.vue -->
<template>

  <div>
    <!-- 페이지 상단 제목과 뒤로가기 버튼 -->
    <div class="title-container">
      <BackButton :to="'/CardNewsMain'"/>
      <p class="chatbot-title">챗봇에게 물어보세요!</p>
    </div>

    <!-- 실제 대화가 이루어지는 챗봇 창 -->
    <div>
      <ChatbotWindow />
    </div>
  </div>
</template>

<script>
import ChatbotWindow from '@/components/chatbot/ChatbotWindow.vue';
import BackButton from "@/components/BackButton.vue";

export default {
  components: {
    BackButton,
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
  padding: 20px 16px 40px 16px;
  display: flex;
  align-items: center; /* 수직 가운데 */
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(to right, #007bff, #87cefa);
  border-image-slice: 1;
  justify-content: flex-start; /* 왼쪽 정렬 기준으로 변경 */
  position: relative;
}

/* "챗봇에게 물어보세요!" 제목 텍스트의 글씨 크기, 굵기, 색상을 지정. */
.title-container p {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
}

.chatbot-title {
  position: absolute;
  top: 26px;      /* 화살표와 동일한 top 값 */
  right: 16px;    /* 오른쪽 패딩 */
  font-size: 30px;
  font-weight: 800;
  color: #2c3e50;
  margin: 0;
  line-height: 1;
}

</style>

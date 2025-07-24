<!-- src/views/ChatbotView.vue -->
<template>
  <div class="title">
    <p>챗봇에게 물어보세요!</p>
  </div>
  <div>
    <ChatbotWindow />
  </div>
</template>

<!--<script setup>
import ChatbotWindow from '@/components/chatbot/ChatbotWindow.vue';
</script>-->

<script>
import ChatbotWindow from '@/components/chatbot/ChatbotWindow.vue';

export default {
  components: {
    ChatbotWindow,
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  font-size: 19px;
  border-bottom: 2px solid #007bff;
  padding-bottom: 20px;
  color: black;
  padding-top: 40px;
  padding-right: 16px;
  margin: 0;
}
.title p {
  margin: 0;
}
</style>

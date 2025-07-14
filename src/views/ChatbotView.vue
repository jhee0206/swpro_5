<script setup lang="ts">
import ChatbotWindow from "@/components/chatbot/ChatbotWindow.vue";
</script>

<template>
  <div class="title">
    <p>챗봇에게 물어보세요!</p>
  </div>
  <div>
    <ChatbotWindow />
  </div>
</template>

<style scoped>
.title {
  width: 100%;
  box-sizing: border-box;
  text-align: right;
  font-size: 20px;
  border-bottom: 3px solid #0077cc;
  padding-bottom: 17px;
  color: white;
  background-color: #0077cc;
  padding-top: 17px;
  padding-right: 12px;
  margin: 0;
}
.title p {
  margin: 0; /* p태그 기본 마진도 제거 */
}
</style>
<style>
body {
  margin: 0;
  padding: 0;
}
</style>

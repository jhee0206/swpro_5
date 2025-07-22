<template>
  <div :class="['chat-message-wrapper', roleClass]">
    <div :class="['chat-bubble', roleClass]">
      <strong>{{ role === 'bot' ? '챗봇:' : '나:' }}</strong>
      <ExpandableText
          :text="content"
          :max-length="90"
          :highlight-mode="highlightMode"
      />
      <img v-if="imageUrl" :src="imageUrl" alt="정보 이미지" class="message-image" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import ExpandableText from './ExpandableText.vue';
const props = defineProps({ role: String, content: String, highlightMode: String, imageUrl: String });
const roleClass = computed(() => (props.role === 'bot' ? 'left' : 'right'));
</script>

<style scoped>
.chat-message-wrapper {
  display: flex;
  margin: 12px 0;
  align-items: flex-end;
}
.chat-message-wrapper.right {
  justify-content: flex-end;
}
.chat-message-wrapper.left {
  justify-content: flex-start;
}
strong {
  font-weight: 600;
  margin-right: 4px;
}
.message-image {
  max-width: 100%;
  border-radius: 8px;
  margin-top: 10px;
}
.chat-bubble {
  position: relative;
  padding: 10px 14px;
  font-size: 16px; /* 모든 말풍선의 기본 글씨 크기 */
  line-height: 1.4;
  word-break: keep-all;
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
}

/* '나'의 말풍선 스타일 */
.chat-bubble.right {
  background-color: #B2DFDB;
  color: #000;
  width: 145px;
  text-align: start;
  font-size: 14px;
}

/* '챗봇'의 말풍선 스타일 */
.chat-bubble.left {
  background-color: #f2f2f2;
  color: #000;
  width: 280px;
}

/* 꼬리 모양 스타일*/
.chat-bubble.right::before,
.chat-bubble.left::before {
  content: '';
  position: absolute;
  bottom: 8px;
  border: 7px solid transparent;
}
.chat-bubble.right::before {
  right: -14px;
  border-left-color: #B2DFDB;
}
.chat-bubble.left::before {
  left: -14px;
  border-right-color: #f2f2f2;
}
</style>

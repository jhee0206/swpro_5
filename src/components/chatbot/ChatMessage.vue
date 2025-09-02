<template>
  <div :class="['chat-message-wrapper', roleClass]">
    <!-- 챗봇일 경우 왼쪽에 프로필 이미지 -->
    <img
        v-if="role === 'bot'"
        src="/icon/chatimg.svg"
        alt="챗봇"
        class="profile-img"
    />

    <div :class="['chat-bubble', roleClass]">
      <strong>{{ role === 'bot' ? '챗봇:' : '나:' }}</strong>
      <ExpandableText
          :text="content"
          :max-length="80"
          :highlight-mode="highlightMode"
          @navigate="$emit('navigate')"
      />
    </div>
  </div>
</template>

<script>
import ExpandableText from './ExpandableText.vue';

export default {
  name: 'ChatMessage',
  components: { ExpandableText },
  props: {
    role: { type: String, required: true },
    content: { type: String, required: true },
    highlightMode: { type: String, default: 'numbered' }
  },
  computed: {
    roleClass() {
      return this.role === 'bot' ? 'left' : 'right';
    }
  }
};
</script>

<style scoped>
.chat-message-wrapper {
  display: flex;
  margin: 18px 0;
  align-items: flex-start; /* 이미지와 말풍선 세로 정렬 */
}

.chat-message-wrapper.right {
  justify-content: flex-end;
}

.chat-message-wrapper.left {
  justify-content: flex-start;
}

/* 프로필 이미지 */
.profile-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
}

/* 말풍선 */
.chat-bubble {
  position: relative;
  padding: 10px 12px;
  max-width: 80%;
  font-size: 17px;
  line-height: 1.4;
  word-break: keep-all;
  border-radius: 18px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
}

.chat-bubble.right {
  background-color: #DBF3F1;
  color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.chat-bubble.left {
  background-color: #FFFFFF;
  color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

strong {
  font-weight: 600;
  margin-right: 4px;
}
</style>

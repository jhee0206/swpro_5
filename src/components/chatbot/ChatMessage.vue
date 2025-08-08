<!-- src/components/chatbot/ChatMessage.vue -->
<template>
  <div :class="['chat-message-wrapper', roleClass]">
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
    role: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    highlightMode: {
      type: String,
      default: 'numbered'
    }
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
  margin: 12px 0;
  align-items: flex-end;
}
.chat-message-wrapper.right {
  justify-content: flex-end;
}
.chat-message-wrapper.left {
  justify-content: flex-start;
}
.chat-bubble {
  position: relative;
  padding: 10px 12px;
  max-width: 80%;
  font-size: 17px;
  line-height: 1.4;
  word-break: keep-all;
  border-radius: 18px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
}
.chat-bubble.right {
  background-color: #B2DFDB;
  color: #000;
}
.chat-bubble.left {
  background-color: #E5E5EA;
  color: #000;
}
strong {
  font-weight: 600;
  margin-right: 4px;
}
</style>

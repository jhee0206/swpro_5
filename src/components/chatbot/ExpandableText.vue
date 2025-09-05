<!-- components/ExpandableText.vue -->
<template>
<span>
<!-- @click 이벤트 핸들러는 그대로 유지합니다. -->
<span class="text-content" v-html="displayTextWithBr" @click="handleContentClick"></span>
<div v-if="isTooLong" class="button-wrapper">
<button @click="toggleExpansion" class="expand-button">
{{ buttonText }}
</button>
</div>
</span>
</template>

<script>
export default {
  name: 'ExpandableText',
  props: {
    text: { type: String, required: true },
    maxLength: { type: Number, default: 80 },
    highlightMode: { type: String, default: 'numbered' }
  },
  data() {
    return {
      isExpanded: false
    };
  },
  computed: {
    isTooLong() {
      return this.text.length > this.maxLength;
    },
    displayText() {
      if (!this.isTooLong || this.isExpanded) {
        return this.text;
      }
      return this.text.substring(0, this.maxLength) + '...';
    },
    highlightedText() {
      if (this.highlightMode === 'subheadings_only') {
        const regex = /(불법행위 신고 대상|신고시 유의사항|신고 방법:|전화신고:|인터넷 신고:|모바일 신고:|방문, 팩스, 우편 신고:)/g;
        return this.displayText.replace(regex, '<strong>$1</strong>');
      }
      if (this.highlightMode === 'numbered') {
        const regex = /^(\d+\..*)/gm;
        return this.displayText.replace(regex, '<strong>$1</strong>');
      }
      return this.displayText;
    },
    displayTextWithBr() {
      return this.highlightedText.replace(/(\r\n|\n|\r)/g, '<br>');
    },
    buttonText() {
      return this.isExpanded ? '간략히 보기' : '더보기';
    }
  },
  methods: {
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    },
    handleContentClick(event) {
// 클릭된 요소가 'app-link' 클래스를 가지고 있는지 확인
      if (event.target.classList.contains('app-link')) {
// 페이지 이동 대신, 'navigate'라는 이름의 이벤트를 부모에게 보냄.
        this.$emit('navigate');
      }
    }
  }
};
</script>

<style scoped>
.text-content {
  word-break: keep-all;
  overflow-wrap: break-word;
}
.expand-button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 600;
}
.expand-button:hover {
  text-decoration: underline;
}

.button-wrapper {
  margin-top: 12px;
}
</style>

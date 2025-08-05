<!-- components/ExpandableText.vue -->
<template>
  <span>
    <span class="text-content" v-html="displayTextWithBr"></span>
    <div v-if ="isTooLong" class="button-wrapper">
      <button v-if="isTooLong" @click="toggleExpansion" class="expand-button">
        {{ buttonText }}
      </button>
    </div>
  </span>
</template>


<script>
export default {
  name: 'ExpandableText',
  props: {
    text: {
      type: String,
      required: true
    },
    maxLength: {
      type: Number,
      default: 80
    },
    highlightMode: {
      type: String,
      default: 'numbered'
    }
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
  background: none; border: none; color: #007bff; cursor: pointer;
  padding: 0; margin-left: 5px; font-size: 15px; font-weight: 600;
}
.expand-button:hover {
  text-decoration: underline;
}
</style>

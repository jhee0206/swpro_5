<!-- components/ExpandableText.vue -->
<template>

  <span>
    <!-- v-html을 사용해 <br>이나 <strong> 태그가 포함된 텍스트를 정상적으로 표시함. -->
    <span class="text-content" v-html="displayTextWithBr" @click="handleContentClick"></span>

    <!-- 텍스트가 길 경우에만 '더보기/간략히 보기' 버튼을 표시함. -->
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

  // 부모 컴포넌트로부터 'text'(내용), 'maxLength'(최대 길이), 'highlightMode'(강조 방식)를 전달받음.
  props: {
    text: { type: String, required: true },
    maxLength: { type: Number, default: 80 },
    highlightMode: { type: String, default: 'numbered' }
  },

  // 컴포넌트 내부에서 사용하는 상태 값. 텍스트가 펼쳐져 있는지 여부를 저장함.
  data() {
    return {
      isExpanded: false
    };
  },

  // data나 props 값이 바뀔 때마다 실시간으로 다시 계산되는 값들.
  computed: {
    // 텍스트가 주어진 최대 길이보다 긴지 여부를 판단함.
    isTooLong() {
      return this.text.length > this.maxLength;
    },
    // 텍스트가 길면 자르고(... 추가), 아니면 원본 텍스트를 그대로 보여줌.
    displayText() {
      if (!this.isTooLong || this.isExpanded) {
        return this.text;
      }
      return this.text.substring(0, this.maxLength) + '...';
    },
    // 'highlightMode'에 따라 특정 키워드에 <strong> 태그를 추가해 굵게 만듦.
    highlightedText() {
      // ...
    },
    // 서버에서 받은 줄바꿈 문자(\n)를 HTML의 줄바꿈 태그(<br>)로 변경함.
    displayTextWithBr() {
      return this.highlightedText.replace(/(\r\n|\n|\r)/g, '<br>');
    },
    // 펼쳐진 상태에 따라 버튼의 텍스트를 '간략히 보기' 또는 '더보기'로 변경함.
    buttonText() {
      return this.isExpanded ? '간략히 보기' : '더보기';
    }
  },

  // 컴포넌트의 주요 기능(동작)을 정의하는 함수(메소드)들.
  methods: {
    // 버튼 클릭 시 isExpanded 상태를 반대로 변경하여 내용을 펼치거나 접음.
    toggleExpansion() {
      this.isExpanded = !this.isExpanded;
    },
    // 텍스트 내의 '자가진단' 링크 클릭 시, 부모 컴포넌트에게 'navigate' 신호를 보냄.
    handleContentClick(event) {
      if (event.target.classList.contains('app-link')) {
        this.$emit('navigate');
      }
    }
  }
};
</script>

<style scoped>

/* 텍스트 내용의 줄바꿈 규칙(단어 단위)을 정의함. */
.text-content {
  word-break: keep-all;
  overflow-wrap: break-word;
}

/* '더보기/간략히 보기' 버튼의 모양, 색상, 글꼴 등 기본 디자인을 정의함. */
.expand-button {
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 0;
  margin-left: 5px;
  font-size: 15px;
  font-weight: 600;
}
.expand-button:hover {
  text-decoration: underline;
}

/* 버튼과 본문 텍스트 사이의 위쪽 간격을 설정함. */
.button-wrapper {
  margin-top: 12px;
}
</style>

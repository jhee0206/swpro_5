<template>
  <span>
    <!-- v-html을 사용하여 계산된 텍스트를 렌더링합니다. -->
    <span class="text-content" v-html="displayTextWithBr"></span>

    <!-- 더보기/간략히 보기 버튼은 텍스트가 너무 길 때만 표시됩니다. -->
    <div v-if="isTooLong" class="button-wrapper">
      <button @click="toggleExpansion" class="expand-button">
        {{ buttonText }}
      </button>
    </div>
  </span>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: '' // text prop이 전달되지 않은 경우를 대비한 기본값
  },
  maxLength: {
    type: Number,
    default: 80
  },
  highlightMode: {
    type: String,
    default: 'numbered'
  }
});

const isExpanded = ref(false);

// isTooLong 계산 시, props.text가 존재하는지 먼저 확인하여 안정성 확보
const isTooLong = computed(() => {
  return props.text && props.text.length > props.maxLength;
});

// 화면에 표시될 텍스트 (더보기/간략히 보기 상태에 따라)
const displayText = computed(() => {
  if (!isTooLong.value || isExpanded.value) {
    return props.text || ''; // 항상 문자열을 반환하도록 보장
  }
  return props.text.substring(0, props.maxLength) + '...';
});

// 특정 키워드를 굵게 표시하는 로직
const highlightedText = computed(() => {
  const textToHighlight = displayText.value;

  if (props.highlightMode === 'subheadings_only') {
    const regex = /(불법행위 신고 대상|신고시 유의사항|신고 방법:|전화신고:|인터넷 신고:|모바일 신고:|방문, 팩스, 우편 신고:)/g;
    return textToHighlight.replace(regex, '<strong>$1</strong>');
  }

  if (props.highlightMode === 'numbered') {
    const regex = /^(\d+\..*)/gm;
    return textToHighlight.replace(regex, '<strong>$1</strong>');
  }

  return textToHighlight;
});

// 줄바꿈 문자를 HTML <br> 태그로 변환
const displayTextWithBr = computed(() => {
  return highlightedText.value.replace(/(\r\n|\n|\r)/g, '<br>');
});

const buttonText = computed(() => (isExpanded.value ? '간략히' : '더보기'));

function toggleExpansion() {
  isExpanded.value = !isExpanded.value;
}
</script>

<style scoped>
.text-content {
  word-break: keep-all;
  overflow-wrap: break-word;
}
.button-wrapper {
  text-align: left;
  margin-top: 4px;
}
.expand-button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  font-size: 15px;
  font-weight: 600;
}
.expand-button:hover {
  text-decoration: underline;
}
</style>

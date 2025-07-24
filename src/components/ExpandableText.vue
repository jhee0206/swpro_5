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

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  text: { type: String, required: true },
  maxLength: { type: Number, default: 80 },
  highlightMode: { type: String, default: 'numbered' }
});

const isExpanded = ref(false);
const isTooLong = computed(() => props.text.length > props.maxLength);

const displayText = computed(() => {
  if (!isTooLong.value || isExpanded.value) return props.text;
  return props.text.substring(0, props.maxLength) + '...';
});

const highlightedText = computed(() => {

  if (props.highlightMode === 'subheadings_only') {
    // 모든 키워드를 |(OR) 연산자로 연결한 정규 표현식.
    // 데이터에 맞춰 콜론(:)이 있는 키워드와 없는 키워드를 구분.
    const regex = /(불법행위 신고 대상|신고시 유의사항|신고 방법:|전화신고:|인터넷 신고:|모바일 신고:|방문, 팩스, 우편 신고:)/g;
    return displayText.value.replace(regex, '<strong>$1</strong>');
  }

  if (props.highlightMode === 'numbered') {
    const regex = /^(\d+\..*)/gm;
    return displayText.value.replace(regex, '<strong>$1</strong>');
  }

  return displayText.value;
});

const displayTextWithBr = computed(() => {
  return highlightedText.value.replace(/(\r\n|\n|\r)/g, '<br>');
});

const buttonText = computed(() => (isExpanded.value ? '간략히 보기' : '더보기'));
function toggleExpansion() { isExpanded.value = !isExpanded.value; }
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

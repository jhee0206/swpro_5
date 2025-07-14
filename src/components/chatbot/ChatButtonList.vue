<!-- components/ChatButtonList.vue -->
<template>
  <div class="button-container">
    <button
        v-for="q in questions"
        :key="q.key"
        @click="onClick(q)"
    >
    {{ q.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  questions: Array,
})
const emit = defineEmits(['select'])

function onClick(questionObject) {
  emit('select', questionObject)
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 10px;
  padding: 8px 2px;
}
button {
  /* 레이아웃: 내용에 따라 크기가 자연스럽게 조절되도록 설정  */
  flex-shrink: 0; /* 컨테이너가 줄어들 때 버튼이 찌그러지는 것을 방지 */

  /* 1. 모양 (Pill Shape) */
  border-radius: 25px;

  /* 2. 색상 (Light Blue & Black Text) */
  background-color: #cceeff;
  color: #000000;
  border: 1px solid #aaddff;

  /* 3. 크기 및 간격 (Padding & Font) */
  padding: 5px 12px;
  font-size: 14px;
  font-weight: 500;

  /* 기타 스타일 */
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #b8e2f5; /* 마우스를 올리면 살짝 어두워지는 효과 */
  border-color: #a0d0f0;
  transform: translateY(-1px); /* 살짝 떠오르는 효과 */
}

button:active {
  transform: scale(0.98);
}
</style>


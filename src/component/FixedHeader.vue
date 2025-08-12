<script setup lang="ts">
// title이라는 prop(문자열) 선언
const props = defineProps<{
  title?: string
  prevLink?: string
}>()

const emit = defineEmits(['prev'])
</script>

<template>
  <div class="mb-[32px]">
    <div>
      <button
          class="button"
          v-if="prevLink"
          @click="$emit('prev')">
        <span class="arrow">&larr;</span>
      </button>
    </div>
    <p class="survey-title">{{ props.title || 'ASSIST 검사' }}</p>
  </div>
</template>

<style scoped>
.survey-title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #2260FF;
  padding-top: 32px;
  padding-bottom: 32px;
}

.arrow {
  font-size: 32px;
  color: #333;
  transition: color 0.2s;
}
</style>

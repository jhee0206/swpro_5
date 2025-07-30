<script setup lang="ts">
// title이라는 prop(문자열) 선언
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="mb-[32px]">
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
</style>
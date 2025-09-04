<script setup lang="ts">
// title이라는 prop(문자열) 선언
const props = defineProps<{
  title?: string
  prevLink?: string
}>()

const emit = defineEmits(['prev'])
</script>

<template>
  <div>
    <p class="survey-title">{{ props.title || 'ASSIST 검사' }}</p>
  </div>
</template>

<style scoped>
.survey-title {
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 1px 6.8px 1px rgba(130, 130, 130, 0.25);
  padding-top: 30px;
  padding-bottom: 21.5px;
  font-family: 'Pretendard', serif;
}
</style>

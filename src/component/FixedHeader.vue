<script setup lang="ts">
const props = defineProps<{
  title?: string
  prevLink?: string
}>()

const emit = defineEmits(['prev'])
</script>

<template>
  <div class="survey-title">
      <p>{{ props.title || 'ASSIST 검사' }}</p>
  </div>
</template>

<style scoped>
.survey-title {
  display: flex;
  justify-content: center;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 1px 6.8px 1px rgba(130, 130, 130, 0.25);
  padding-top: 30px;
  padding-bottom: 21.5px;
  font-family: 'Pretendard', serif;
}

.button {
  display: flex;
}

.arrow {
  font-size: 32px;
  color: #333;
  transition: color 0.2s;
}
</style>

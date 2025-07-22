<script setup lang="ts">
import ButtonComponent from "@/component/ButtonComponent.vue";

const props = defineProps<{
  prevLink?: string
  nextLink?: string
}>()
const emit = defineEmits(['prev','next'])
</script>

<template>
  <div class="mb-[32px]">
    <p class="survey-title">ASSIST 검사</p>
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
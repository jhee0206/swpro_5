<script setup lang="ts">
const props = defineProps<{
  prevLink?: string
  nextLink?: string
}>()
const emit = defineEmits(['next'])
</script>

<template>
  <div class="mb-[32px]">
    <div class="w-full flex justify-between pt-[12px]">
      <div>
        <router-link v-if="prevLink" :to="prevLink">이전버튼</router-link>
      </div>
      <div>
        <button
            v-if="nextLink"
            @click="$emit('next')"
        >{{ nextLink || '다음버튼' }}</button>
      </div>
    </div>
    <div class="my-[20px]">
      <p class="survey-title">ASSIST 검사</p>
    </div>
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
  padding-top: 40px;
  padding-bottom: 32px;
}
</style>
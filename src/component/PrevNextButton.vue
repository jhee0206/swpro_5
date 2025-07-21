<script setup lang="ts">
const props = defineProps<{
  prevLink?: string
  nextLink?: string
}>()
const emit = defineEmits(['next'])
</script>

<template>
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
</template>

<style scoped>

</style>
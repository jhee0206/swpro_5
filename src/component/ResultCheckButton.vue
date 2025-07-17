<script setup lang="ts">
const props = defineProps<{
  nextLink?: string
}>()
const emit = defineEmits(['next'])
</script>

<template>
  <div> <!-- 전체 영역 -->
    <button
        class="button"
        @click="$emit('next')"
    >
      {{ nextLink || '확인' }}
    </button>
  </div>
</template>

<style scoped>
.button {
  border-width: 2px;
  border-color: #2260FF;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 8px;
}
</style>
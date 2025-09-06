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
        v-if="nextLink"
        @click="$emit('next')">
      {{ nextLink || '확인' }}
    </button>
  </div>
</template>

<style scoped>
.button {
  background-color: #258FB3;
  color: #FFFFFF;
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 8px;
}

button.button:hover {
  background-color: rgba(37, 143, 179, 0.7);
  cursor: pointer;
}
</style>
<script setup lang="ts">
const props = defineProps<{
  nextLink?: string
}>()
const emit = defineEmits(['next'])
</script>

<template>
  <div class="button-wrapper"> <!-- 전체 영역 -->
    <button
        class="button"
        v-if="nextLink"
        @click="$emit('next')">
      {{ nextLink || '확인' }}
    </button>
  </div>
</template>

<style scoped>
.button-wrapper {
  padding-top: 5%;
}

.button {
  width: 100%;
  height: 58px;
  color: #FFFFFF;
  font-size: 16px;
  background-color: #258FB3;
  border-radius: 10px;
}

button.button:hover {
  background-color: rgba(37, 143, 179, 0.7);
  cursor: pointer;
}
</style>
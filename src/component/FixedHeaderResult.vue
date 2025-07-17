<script setup lang="ts">
const props = defineProps<{
  prevLink?: string
  step?: string
  nextLink?: string
  safety?: string
  color?: string
}>()
const emit = defineEmits(['prev'])
</script>

<template>
  <div class="w-full pt-[12px] mb-[32px]">
    <div>
      <button
          v-if="prevLink"
          @click="$emit('prev')"
      >
        {{ prevLink || '이전버튼' }}
      </button>
    </div>
    <div class="px-[12px]">
      <div class="my-[20px]">
        <p class="step">당신은 현재 <br> {{ step }} 단계입니다.</p>
      </div>
      <div>
        <span class="safety"
              :style="{
                backgroundColor: props.color,
              }">{{ safety }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step {
  padding-top: 40px;
  padding-bottom: 4px;
  font-size: 24px;
  font-weight: bold;
}

.safety {
  color: #ffffff;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 8px;
}
</style>
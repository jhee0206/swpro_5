<!-- src/components/chatbot/ChatButtonList.vue -->
<template>
  <div class="button-container">
    <button
        v-for="q in questions"
        :key="q.key"
        @click="onClick(q)"
    >
      {{ q.label }}
    </button>
  </div>
</template>

<!--<script setup>
const props = defineProps({
  questions: Array,
})
const emit = defineEmits(['select'])

function onClick(questionObject) {
  emit('select', questionObject)
}
</script>-->

<script>
export default {
  name: 'ChatButtonList',
  props: {
    questions: {
      type: Array,
      required: true
    }
  },
  methods: {
    onClick(questionObject) {
      this.$emit('select', questionObject);
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 8px 2px;
}
button {
  flex-shrink: 0;
  border-radius: 25px;
  background-color: #cceeff;
  color: #000000;
  border: 1px solid #aaddff;
  padding: 5px 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
button:hover {
  background-color: #b8e2f5;
  border-color: #a0d0f0;
  transform: translateY(-1px);
}
button:active {
  transform: scale(0.98);
}
</style>

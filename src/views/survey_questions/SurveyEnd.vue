<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute();

const answers = computed(() => {
  if (!route.query.answers) return [];
  return JSON.parse(route.query.answers as string);
});

// Q2~Q7 문항만 집계
const QUESTION_RANGE = [2, 3, 4, 5, 6, 7];

const allLabels = computed(() => {
  return [
    ...new Set(
        answers.value
            .filter(a => QUESTION_RANGE.includes(a.questionNo))
            .map(a => a.label)
    )
  ];
});

// 물질별 총점
const substanceScores = computed(() => {
  return allLabels.value.map(label => {
    const total = answers.value
        .filter(a => a.label === label && QUESTION_RANGE.includes(a.questionNo))
        .reduce((sum, a) => sum + (Number(a.value) || 0), 0)
    return { label, total }
  })
});
</script>

<template>
  <div class="w-full max-w-[600px] mx-auto mt-12 mb-20 text-lg">
    <h2 class="font-bold text-xl mb-8">Q2~Q7 문항에 대한 물질별 점수</h2>
    <div v-for="item in substanceScores" :key="item.label" class="my-2">
      <span class="font-semibold">{{ item.label }} :</span>
      <span class="ml-2 text-blue-700 font-bold">{{ item.total }}</span>
    </div>
  </div>
</template>
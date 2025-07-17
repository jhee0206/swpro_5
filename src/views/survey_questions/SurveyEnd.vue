<script setup lang="ts">
import { computed } from 'vue'
import { useSurveyStore } from '@/views/survey'

const store = useSurveyStore()

const selectedLabels = computed(() =>
    store.q1.filter(item => item.score === 3).map(item => item.label)
)

const materialScores = computed(() =>
    selectedLabels.value.map(label => {
      const sum = (store.q2to7[label] ?? []).reduce((acc, v) => acc + (v ?? 0), 0)
      return { label, total: sum }
    })
)
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>물질명</th>
      <th>Q2~Q7 점수 합계</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in materialScores" :key="row.label">
      <td>{{ row.label }}</td>
      <td>{{ row.total }}</td>
    </tr>
    </tbody>
  </table>
</template>
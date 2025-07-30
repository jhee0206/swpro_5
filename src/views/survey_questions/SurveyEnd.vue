<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import FixedHeader from "@/component/FixedHeader.vue";

const route = useRoute()

const QUESTION_RANGE = [2,3,4,5,6,7]

// 위험군 기준표
const RISK_RANGES = {
  '담배제품': { low: 0, middle: 4, high: 27 },
  '알코올 음료': { low: 0, middle: 11, high: 27 },
  '대마제제': { low: 0, middle: 4, high: 27 },
  '코카인': { low: 0, middle: 4, high: 27 },
  '암페타민계 중추신경 자극제': { low: 0, middle: 4, high: 27 },
  '흡입제': { low: 0, middle: 4, high: 27 },
  '진정제 또는 수면제': { low: 0, middle: 4, high: 27 },
  '환각제': { low: 0, middle: 4, high: 27 },
  '아편제제': { low: 0, middle: 4, high: 27 },
  '기타': { low: 0, middle: 4, high: 27 }
}

// 답변 데이터
const answers = computed(() => {
  if (!route.query.answers) return []
  return JSON.parse(route.query.answers as string)
})

const allLabels = computed(() => {
  return [...new Set(
      answers.value.filter(a => QUESTION_RANGE.includes(a.questionNo)).map(a => a.label)
  )]
})

function getRiskGrade(label, total) {
  const rule = RISK_RANGES[label]
  if (!rule) return '-'
  if (total >= rule.high)      return '고위험'
  if (total >= rule.middle)  return '중등도 위험'
  return '저위험'
}

const riskReport = computed(() => {
  return allLabels.value.map(label => {
    const total = answers.value
        .filter(a => a.label === label && QUESTION_RANGE.includes(a.questionNo))
        .reduce((sum, a) => sum + (Number(a.value) || 0), 0)
    return {
      label,
      total,
      risk: getRiskGrade(label, total)
    }
  })
})
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]">
    <FixedHeader/>
    <table class="min-w-full border text-center">
      <thead>
      <tr class="bg-blue-50">
        <th class="border p-[8px]">물질</th>
        <th class="border p-[8px]">점수</th>
        <th class="border p-[8px]">위험군</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in riskReport" :key="item.label">
        <td class="border p-[8px]">{{ item.label }}</td>
        <td class="border p-[8px]">{{ item.total }}점</td>
        <td class="border p-[8px]"
          :class="{
        'bg-[#6AAA5B] text-[#FFFFFF] border-[#000000]': item.risk==='저위험',
        'bg-[#F5AF2D] text-[#FFFFFF] border-[#000000]': item.risk==='중등도 위험',
        'bg-[#C31D1D] text-[#FFFFFF] border-[#000000]': item.risk==='고위험'
        }">{{ item.risk }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <a href="/survey/result/low">저위험</a><br>
      <a href="/survey/result/middle">중등도 위험</a><br>
      <a href="/survey/result/high">고위험</a>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import ResultSafety from "@/component/ResultSafety.vue";
import NavigationBar from "@/component/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";

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

const showImage = ref(false) // 이미지 표시 여부

function handleShowImage() {
  showImage.value = true
}

function handleCloseImage() {
  showImage.value = false
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
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역-->
    <div class="mb-[32px]"> <!--헤더 영역-->
      <p class="survey-title">여러분의 점수를 확인해보세요.</p>
    </div>
    <div> <!--결과표-->
      <table class="min-w-full text-center">
        <thead>
        <tr class="bg-blue-50">
          <th class="border border-gray-200 p-[8px]">물질</th>
          <th class="border border-gray-200 p-[8px]">점수</th>
          <th class="border border-gray-200 p-[8px]">위험군</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in riskReport" :key="item.label">
          <td class="border border-gray-200 p-[8px]">{{ item.label }}</td>
          <td class="border border-gray-200 p-[8px]">{{ item.total }}점</td>
          <td class="border border-gray-200 p-[8px] text-[#FFFFFF]"
              :class="{
            'bg-[#6AAA5B]': item.risk==='저위험',
            'bg-[#F5AF2D]': item.risk==='중등도 위험',
            'bg-[#C31D1D]': item.risk==='고위험'
        }">{{ item.risk }}</td>
        </tr>
        </tbody>
      </table>
    </div> <!--결과표-->
    <div>
      <ResultSafety class="pt-[32px]"/>
    </div>
    <div class="flex justify-center border-b-[2px] border-[#2260FF] py-[32px]">
      <button @click="handleShowImage" class="habit-check">
        나의 약물 사용습관 위험도 확인하기
      </button>
    </div>
    <div v-if="showImage" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div class="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center">
        <p>표를 통해 현재 자신의 상태를 확인해보세요</p>
        <img
            src="/public/habit-risk-check.png"
            alt="위험도 안내"
            class="max-w-[400px] rounded"/>
        <ButtonComponent
          class="p-[12px]"
          nextLink="닫기"
          @next="handleCloseImage"/>
      </div>
    </div>
  </div>
  <NavigationBar/>
</template>

<style scoped>
.survey-title {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;
}

.habit-check {
  font-size: 20px;
  color: #C31D1D;
  border-style: solid;
  border-width: 1px;
  border-color: #C31D1D;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
}
</style>
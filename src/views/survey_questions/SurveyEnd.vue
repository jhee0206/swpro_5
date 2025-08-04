<script setup lang="ts">
import { computed, ref } from "vue"
import {useRoute, useRouter} from "vue-router"
import ResultSafety from "@/component/ResultSafety.vue";
import NavigationBar from "@/component/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";

const route = useRoute()
const router = useRouter();

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

// '카드뉴스 보기'
function handleCardnews() {
  router.push('') // '카드뉴스'로 이동
}

function handleChatbot() {
  router.push('') // '챗봇'으로 이동
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

// 위험군별 그룹화
const riskGroups = computed(() => {
  const groups = { 저위험: [], '중등도 위험': [], 고위험: [] }
  riskReport.value.forEach(item => {
    groups[item.risk]?.push(item.label)
  })
  return groups
})

// 저중고 위험 안내문
const riskMent = computed(() => {
  const strings = []
  if (riskGroups.value['저위험'].length)
    strings.push(`${riskGroups.value['저위험'].join(', ')}은(는) 저위험`)
  if (riskGroups.value['중등도 위험'].length)
    strings.push(`${riskGroups.value['중등도 위험'].join(', ')}은(는) 중등도 위험`)
  if (riskGroups.value['고위험'].length)
    strings.push(`${riskGroups.value['고위험'].join(', ')}은(는) 고위험`)
  return strings.length ? strings.join('이며, ') + '단계에 해당해요! \n\n' : ''
})

// 저중고 위험 안내문 세부사항
const riskMentDetail = computed(() => {
  const strings = []

  // riskReport에서 각 라벨별 total 점수를 확인하여 0점인 경우 제외
  const filteredRiskReport = riskReport.value.filter(item => item.total > 0);

  const lowRiskLabels = filteredRiskReport.filter(i => i.risk === '저위험').map(i => i.label);
  if (lowRiskLabels.length)
    strings.push(`${lowRiskLabels.join(', ')}은(는) 저위험 단계에 해당해요. \n주기적인 자가진단을 권장하며 자기보호를 위한 상황별 대응법이 중요합니다.`);

  const moderateRiskLabels = filteredRiskReport.filter(i => i.risk === '중등도 위험').map(i => i.label);
  if (moderateRiskLabels.length)
    strings.push(`${moderateRiskLabels.join(', ')}은(는) 중등도 위험 단계에 해당해요. \n물질 사용에 대한 위험 신호를 일부 보입니다. 지금은 큰 문제가 아니더라도, 습관이 누적되면 중독으로 변할 수 있어요.`);

  const highRiskLabels = filteredRiskReport.filter(i => i.risk === '고위험').map(i => i.label);
  if (highRiskLabels.length)
    strings.push(`${highRiskLabels.join(', ')}은(는) 고위험 단게에 해당해요. \n물질 사용 문제가 심각한 수준일 수 있어요. 전문가와의 상담을 통해 빠르게 조치를 받는 것이 중요합니다.`);

  return strings.length ? strings.join('\n\n') : '';
})

const showChatbotBtn = computed(() => {
  // 1. 점수 0점 이상인 항목만 필터링
  const filteredRiskReport = riskReport.value.filter(item => item.total > 0);

  // 2. 위험군별 그룹화 (점수 0 제외)
  const filteredRiskGroups = { '저위험': [], '중등도 위험': [], '고위험': [] };
  filteredRiskReport.forEach(item => {
    filteredRiskGroups[item.risk].push(item.label);
  });

  // 3. 챗봇 버튼 노출 조건 (점수 0인 제품은 무시)
  const isOneLowOrModerate =
      filteredRiskGroups['저위험'].includes('담배제품') ||
      filteredRiskGroups['중등도 위험'].includes('담배제품') ||
      filteredRiskGroups['저위험'].includes('알코올 음료') ||
      filteredRiskGroups['중등도 위험'].includes('알코올 음료');
  const hasHighRisk = filteredRiskGroups['고위험'].length > 0;

  return isOneLowOrModerate || hasHighRisk;
});
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역-->
    <div> <!--헤더 영역-->
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
      <ResultSafety class="pt-[16px]"/>
    </div>
    <div class="flex justify-center border-b-[2px] border-[#2260FF] pt-[16px] pb-[32px]">
      <button @click="handleShowImage" class="habit-check">
        나의 약물 사용습관 위험도 확인하기
      </button>
    </div>
    <div v-if="showImage" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white rounded-lg p-4 shadow-lg flex flex-col items-center px-[12px]">
        <p>표를 통해 현재 자신의 상태를 확인해보세요</p>
        <img
            src="/public/habit-risk-check.png"
            alt="위험도 안내"
            class="max-w-[400px] rounded px-[16px]"/>
        <img
            src="/public/risk-meaning.png"
            alt="위험도 안내"
            class="max-w-[400px] rounded"/>
        <ButtonComponent
          class="p-[12px]"
          nextLink="닫기"
          @next="handleCloseImage"/>
      </div>
    </div>
    <div class="py-[32px]"> <!-- 저중고 위험 안내문 -->
      <div class="whitespace-pre-line">{{ riskMent }}</div>
      <div class="whitespace-pre-line border border-[2px] p-[4px] border-[#2260FF]">{{ riskMentDetail }}</div>
      <div><br>앱에서 도움을 받을 수 있는 경로를 안내해드릴게요.</div>
    </div>
    <div class="flex justify-center mb-[65px]"> <!-- '확인'버튼 -->
      <ButtonComponent
      class="p-[4px]"
      nextLink="카드뉴스 보기"
      @next="handleCardnews"/>
      <ButtonComponent
          v-if="showChatbotBtn"
          class="p-[4px]"
          nextLink="챗봇 이동"
          @next="handleChatbot"/>
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

.habit-check:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
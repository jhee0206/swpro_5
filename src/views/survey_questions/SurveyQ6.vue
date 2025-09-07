<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";

const route = useRoute();
const router = useRouter();

const frequencyOptions = [
  { label: '전혀없다', value: 0 },
  { label: '지난 3개월간 있었다', value: 6 },
  { label: '있었지만, 지난 3개월간 없었다', value: 3 },
]

// Q1에서 '예'로 선택한 항목만 받아서 items로 만듦
const items = ref<{ label: string; value: number|null }[]>([])

// 이전까지 누적된 답변들
const previousAnswers = ref<any[]>([])

onMounted(() => {
  if (route.query.selected) {
    const arr = JSON.parse(route.query.selected as string)
    items.value = arr.map((label: string) => ({
      label,
      value: null
    }))
  }
  // 이전 답변 누적 배열 (없으면 빈 배열)
  previousAnswers.value = route.query.answers ? JSON.parse(route.query.answers as string) : []
})

function handlePrev() {
  router.push({ name: "SurveyMain" })
}

// 다음 버튼 클릭 시 모든 항목 체크 여부 등 유효성 검사
function handleNext() {
  const allChecked = items.value.every(item => item.value !== null)
  if (!allChecked) {
    alert('모든 항목에 답변해 주세요!')
    return
  }

  // 현재 페이지(Q6)의 답변을 answers 구조로 만듦
  const thisAnswers = items.value.map(item => ({
    label: item.label,
    value: item.value,
    questionNo: 6,
  }))
  const allAnswers = [...previousAnswers.value, ...thisAnswers]

  // 'SurveyQ6'으로 이동
  router.push({
    path: '/survey/q7',
    query: {
      selected: JSON.stringify(items.value.map(i => i.label)),
      answers: JSON.stringify(allAnswers)
    }
  })
}
</script>

<template>
  <FixedHeader
      prevLink="이전으로"
      @prev="handlePrev"/>
  <div class="wrapper"> <!--컨텐츠 영역-->
    <div> <!-- 세부 질문 -->
      <div> <!-- 질문지 -->
        <div class="w-full">
          <!-- 질문 제목 -->
          <div class="question-title">
            <p>Q6. 물질 사용에 대해 가족 혹은 다른 누군가가 걱정이나 우려를 표현한 적이 있었습니까?</p>
          </div>
          <!-- 표 그리드 -->
          <div class="overflow-x-auto">
            <table class="min-w-full text-center text-[15px] bg-[#FFFFFF] rounded-[12px] overflow-hidden">
              <thead class="bg-blue-50">
              <tr>
                <th class="border border-gray-200 p-[8px] bg-[#258FB3] text-[#FFFFFF]">물질의 종류</th>
                <th v-for="opt in frequencyOptions" :key="opt.value" class="w-[15%] border border-gray-200 px-2 py-2 bg-[#258FB3] text-[#FFFFFF]">
                  {{ opt.label }}
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, idx) in items" :key="item.label">
                <td class="border border-gray-200 p-[8px]">{{ item.label }}</td>
                <td
                    v-for="opt in frequencyOptions"
                    :key="opt.value"
                    class="border border-gray-200 p-[8px]"
                >
                  <input
                      type="radio"
                      :name="`freq_${idx}`"
                      :value="opt.value"
                      v-model="item.value"
                      class="accent-blue-500"
                  />
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end pt-[12px] mb-[65px]"> <!-- 다음버튼 -->
      <ButtonComponent
          nextLink="다음"
          @next="handleNext"
      />
    </div>
  </div>
  <NavigationBar/>
</template>

<style scoped>
@import "/src/assert/main.css";

.wrapper {
  width: 100vw;
  height: 90vh;
  padding-left: 18px;
  padding-right: 18px;
  background-color: #F8F8F8;
  font-family: 'Pretendard', serif;
}
</style>

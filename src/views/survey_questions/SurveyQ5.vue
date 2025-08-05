<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";

const route = useRoute();
const router = useRouter();

const frequencyOptions = [
  { label: '전혀없음', value: 0 },
  { label: '한두번', value: 2 },
  { label: '매달', value: 3 },
  { label: '매주', value: 4 },
  { label: '거의매일', value: 6 },
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
      value: null,
      disabled: label === '담배제품'
    }))
  }
  // 이전 답변 누적 배열 (없으면 빈 배열)
  previousAnswers.value = route.query.answers ? JSON.parse(route.query.answers as string) : []
})

function handlePrev() {
  router.push('/')
}

// 다음 버튼 클릭 시 모든 항목 체크 여부 등 유효성 검사
function handleNext() {
  // disabled가 아닌 항목만 확인
  const allChecked = items.value
      .filter(item => !item.disabled)
      .every(item => item.value !== null)
  if (!allChecked) {
    alert('모든 항목에 답변해 주세요!')
    return
  }

  // 현재 페이지(Q5)의 답변을 answers 구조로 만듦
  const thisAnswers = items.value.map(item => ({
    label: item.label,
    value: item.value,
    questionNo: 5,
  }))
  const allAnswers = [...previousAnswers.value, ...thisAnswers]

  // 'SurveyQ6'으로 이동
  router.push({
    path: '/survey/q6',
    query: {
      selected: JSON.stringify(items.value.map(i => i.label)),
      answers: JSON.stringify(allAnswers)
    }
  })
}
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader/>
    <div class="w-full flex flex-col justify-between"> <!-- 컨텐츠 -->
      <div> <!-- 세부 질문 -->
        <div> <!-- 질문지 -->
          <div class="w-full">
            <!-- 질문 제목 -->
            <div class="question-title">
              <p>Q5. 지난 3개월 동안, 물질 사용으로 인해 해야 할 일을 하지 못한 적이 얼마나 자주 있었습니까?</p>
            </div>
            <!-- 표 그리드 -->
            <div class="overflow-x-auto">
              <table class="min-w-full text-center text-[15px]">
                <thead class="bg-blue-50">
                <tr>
                  <th class="border border-gray-200 p-[8px]">물질의 종류</th>
                  <th v-for="opt in frequencyOptions" :key="opt.value" class="w-[11%] border border-gray-200 px-2 py-2">
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
                        :disabled="item.disabled"
                    />
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
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
</style>

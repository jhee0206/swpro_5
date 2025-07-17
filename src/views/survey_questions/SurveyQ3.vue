<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

import FixedHeader from "@/views/component/FixedHeader.vue";
import NavigationBar from "@/views/component/NavigationBar.vue";

const frequencyOptions = [
  { label: '전혀없음', value: 0 },
  { label: '한두번', value: 2 },
  { label: '매달', value: 3 },
  { label: '매주', value: 4 },
  { label: '거의매일', value: 6 },
]

// Q1에서 '예'로 선택한 항목만 받아서 items로 만듦
const items = ref<{ label: string; value: number|null }[]>([])

onMounted(() => {
  if (route.query.selected) {
    const arr = JSON.parse(route.query.selected as string)
    items.value = arr.map((label: string) => ({
      label,
      value: null
    }))
  }
})

// 다음 버튼 클릭 시 모든 항목 체크 여부 등 유효성 검사
function handleNext() {
  const allChecked = items.value.every(item => item.value !== null)
  if (!allChecked) {
    alert('모든 항목에 답변해 주세요!')
    return
  }

  // 'SurveyQ4'으로 이동
  router.push({
    path: '/survey/q4',
    query: { selected: JSON.stringify(items.value.map(i => i.label)) }
  })
}
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader
        prevLink="/survey/q2"
        nextLink="다음버튼"
        @next="handleNext"/>
    <div class="w-full flex flex-col justify-between"> <!-- 컨텐츠 -->
      <div> <!-- 세부 질문 -->
        <div> <!-- 질문지 -->
          <div class="w-full">
            <!-- 질문 제목 -->
            <div class="question-title">
              <p>Q3. 지난 3개월 동안, 물질 사용에 대한 강한 욕구나 충동을 얼마나 자주 느꼈습니까?</p>
            </div>
            <!-- 표 그리드 -->
            <div class="overflow-x-auto">
              <table class="min-w-full text-center text-[15px]">
                <thead class="bg-blue-50">
                <tr>
                  <th class="border border-gray-200 px-2 py-2">물질의 종류</th>
                  <th v-for="opt in frequencyOptions" :key="opt.value" class="w-[11%] border border-gray-200 px-2 py-2">
                    {{ opt.label }}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, idx) in items" :key="item.label">
                  <td class="border border-gray-200 px-2 py-2">{{ item.label }}</td>
                  <td
                      v-for="opt in frequencyOptions"
                      :key="opt.value"
                      class="border border-gray-200 px-2 py-2"
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
    </div>
  </div>
  <NavigationBar/>
</template>

<style scoped>
  @import "/src/assert/main.css";
</style>
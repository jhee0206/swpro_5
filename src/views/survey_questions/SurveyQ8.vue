<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/component/NavigationBar.vue";

const route = useRoute();
const router = useRouter();

const frequencyOptions = [
  { label: '전혀없다', value: 0 },
  { label: '지난 3개월간 있었다', value: 2 },
  { label: '있었지만, 지난 3개월간 없었다', value: 1 },
]

const previousAnswers = ref<any[]>([])

onMounted(() => {
  previousAnswers.value = route.query.answers ? JSON.parse(route.query.answers as string) : []
})

function handlePrev() {
  router.push('/')
}

// 다음 버튼 클릭 시 모든 항목 체크 여부 등 유효성 검사
function handleNext() {
  if (previousAnswers.value === null) {
    alert('반드시 하나를 선택해 주세요!')
    return
  }
  const thisAnswer = { label: '주사약물사용', value: previousAnswers.value, questionNo: 8 }
  const allAnswers = [ ...previousAnswers.value, thisAnswer ]
  router.push({
    path: '/survey/end',
    query: { answers: JSON.stringify(allAnswers) }
  })
}
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader
        prevLink="이전버튼"
        nextLink="다음버튼"
        @prev="handlePrev"
        @next="handleNext"/>
    <div class="w-full flex flex-col justify-between"> <!-- 컨텐츠 -->
      <div> <!-- 세부 질문 -->
        <div> <!-- 질문지 -->
          <div class="w-full">
            <div class="question-title"> <!-- 질문 제목 -->
              <p>Q8. 주사로 약물을 사용한 적이 있습니까? <span>(의학적 사용은 제외)</span></p>
            </div>
            <div> <!-- 표 그리드 -->
              <table class="w-full table-fixed border border-gray-300 text-center text-[15px]">
                <thead class="bg-blue-50">
                <tr>
                  <th
                      v-for="opt in frequencyOptions"
                      :key="opt.value"
                      class="w-1/3 border-r border-gray-200 px-2 py-3 font-semibold">
                    {{ opt.label }}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td
                      v-for="opt in frequencyOptions"
                      :key="opt.value + '-input'"
                      class="border-t border-r border-gray-200 px-2 py-4">
                    <input
                        type="radio"
                        :value="opt.value"
                        v-model="value"
                        class="accent-blue-500 scale-110"
                        :aria-label="opt.label"/>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NavigationBar/>
  </div>
</template>

<style scoped>
  @import "/src/assert/main.css";
</style>
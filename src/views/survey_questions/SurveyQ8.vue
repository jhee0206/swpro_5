<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

import FixedHeader from "@/views/component/FixedHeader.vue";
import NavigationBar from "@/views/component/NavigationBar.vue";

const frequencyOptions = [
  { label: '전혀없다', value: 0 },
  { label: '지난 3개월간 있었다', value: 2 },
  { label: '있었지만, 지난 3개월간 없었다', value: 1 },
]


// 다음 버튼 클릭 시 모든 항목 체크 여부 등 유효성 검사
function handleNext() {
  // 'SurveyEnd'으로 이동
  router.push('/survey/end')
}
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader
        prevLink="/survey/q1"
        nextLink="다음버튼"
        @next="handleNext"/>
    <div class="w-full flex flex-col justify-between"> <!-- 컨텐츠 -->
      <div> <!-- 세부 질문 -->
        <div> <!-- 질문지 -->
          <div class="w-full">
            <!-- 질문 제목 -->
            <div class="question-title">
              <p>Q8. 주사로 약물을 사용한 적이 있습니까?
                <span>(의학적 사용은 제외)</span></p>
            </div>
            <!-- 표 그리드 -->
            <div class="overflow-x-auto">
              <table class="min-w-full text-center text-[15px]">
                <thead class="bg-blue-50">
                <tr>
                  <th v-for="opt in frequencyOptions" :key="opt.value" class="w-[33%] border border-gray-200 px-2 py-2">
                    {{ opt.label }}
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td class="border border-gray-200 px-2 py-2"></td>
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
    <NavigationBar/>
  </div>
</template>

<style scoped>
  @import "/src/assert/main.css";
</style>
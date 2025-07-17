<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()

import FixedHeader from "@/views/component/FixedHeader.vue";
import NavigationBar from "@/views/component/NavigationBar.vue";

const items = ref([
  { label: '담배제품', score: null },
  { label: '알코올 음료', score: null },
  { label: '대마제제', score: null },
  { label: '코카인', score: null },
  { label: '암페타민계 중추신경 자극제', score: null },
  { label: '흡입제', score: null },
  { label: '진정제 또는 수면제', score: null },
  { label: '환각제', score: null },
  { label: '아편제제', score: null },
  { label: '기타', score: null },
])

function goToNext() {
  // 1. 모든 문항에 체크했는지 검사
  const allChecked = items.value.every(item => item.score !== null)
  if (!allChecked) {
    alert('모든 문항에 답변해 주세요!')
    return
  }

  // 2. 모두 아니오(0)면 설문 종료
  const allNo = items.value.every(item => item.score === 0)
  if (allNo) {
    router.push('/survey/end')
    return
  }

  // 3. 예(3)로 체크한 항목만 추출해서 Q2~Q7로 전달
  const selectedItems = items.value.filter(item => item.score === 3).map(item => item.label)
  router.push({
    path: '/survey/q2',
    query: { selected: JSON.stringify(selectedItems) }
  })
}
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader
        prevLink="/"
        nextLink="다음버튼"
        @next="goToNext"/>
    <div class="w-full flex flex-col justify-between"> <!-- 컨텐츠 -->
      <div> <!-- 세부 질문 -->
        <div> <!-- 질문지 -->
          <div class="w-full">
            <!-- 질문 제목 -->
            <div class="question-title">
              <p>Q1. 일생 동안, 다음 물질 중 어떤 것을 사용해 본 경험이 있습니까?
              <span>(의학적 사용은 제외)</span></p>
            </div>
            <!-- 표 그리드 -->
            <div class="grid grid-cols-4 border-t border-b border-gray-300 text-center text-[15px]">
              <div class="py-2 bg-blue-50 border border-gray-200 col-span-2">물질의 종류</div>
              <div class="py-2 bg-blue-50 border border-gray-200">아니오</div>
              <div class="py-2 bg-blue-50">예</div>
              <template v-for="(item, idx) in items" :key="item.label">
                <div class="py-2 border border-gray-200 col-span-2">{{ item.label }}</div>
                <div class="py-2 border border-gray-200">
                  <input
                      type="radio"
                      :name="`q1_${idx}`"
                      :checked="item.score === 0"
                      @change="item.score = 0"
                      class="accent-blue-500"
                  />
                </div>
                <div class="py-2 border border-gray-200">
                  <input
                      type="radio"
                      :name="`q1_${idx}`"
                      :checked="item.score === 3"
                      @change="item.score = 3"
                      class="accent-blue-500"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="opacity-50 bg-[#2260ff] text-[#fff] p-[12px] mb-[65px]"> <!-- 안내사항 -->
          <div> <!-- 안내사항1 -->
            <p>. 만약 모든 답변이 <span>'아니오'</span>일 경우<span>-> 면담 중단</span></p>
            <p class="text-[11px]">(이 경우, 학교에 다녔던 시기에도 하지 않았는지 확인한다.)</p>
          </div>
          <div class="flex"> <!-- 안내사항2 -->
            <p>. 만약 한가지라도 답변이 <span>'예'</span>일 경우<span>-> Q2로 이동</span></p>
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
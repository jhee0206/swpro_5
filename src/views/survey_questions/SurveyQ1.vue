<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";

const router = useRouter()

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

function handlePrev() {
  router.push({ name: "SurveyMain" })
}
function handleNext() {
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
  <FixedHeader
      prevLink="이전으로"
      @click="handlePrev"
  /> <!-- 이전버튼 생성 해야함 -->
  <div class="wrapper"> <!--컨텐츠 영역 -->
      <div> <!-- 세부 질문 -->
        <div> <!-- 질문지 -->
          <div class="w-full">
            <!-- 질문 제목 -->
            <div class="question-title">
              <p>Q1. 일생 동안, 다음 물질 중 어떤 것을 사용해 본 경험이 있습니까?<span class="font-normal">&nbsp(의학적 사용은 제외)</span></p>
            </div>
            <!-- 표 그리드 -->
            <div class="grid grid-cols-4 text-center text-[15px] bg-[#FFFFFF] rounded-[12px]">
              <div class="py-[8px] bg-[#258FB3] text-[#FFFFFF] border border-gray-200 col-span-2">물질의 종류</div>
              <div class="py-[8px] bg-[#258FB3] text-[#FFFFFF] border border-gray-200">아니오</div>
              <div class="py-[8px] bg-[#258FB3] text-[#FFFFFF] border border-gray-200">예</div>
              <template v-for="(item, idx) in items" :key="item.label">
                <div class="py-[8px] border border-gray-200 col-span-2"
                     :class="{ 'rounded-bl-[12px]': idx === items.length - 1, /* 마지막 행 왼쪽 아래 둥글기 */ }"
                >{{ item.label }}</div>
                <div class="py-[8px] border border-gray-200">
                  <input
                      type="radio"
                      :name="`q1_${idx}`"
                      :checked="item.score === 0"
                      @change="item.score = 0"
                      class="accent-blue-500"
                  />
                </div>
                <div class="py-[8px] border border-gray-200"
                     :class="{ 'rounded-br-[12px]': idx === items.length - 1, /* 마지막 행 오른쪽 아래 둥글기 */ }">
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
      </div>
    <div class="flex justify-end pt-[5%]"> <!-- 다음버튼 -->
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
    height: 100vh;
    padding-left: 18px;
    padding-right: 18px;
    background-color: #F8F8F8;
    font-family: 'Pretendard', serif;
  }

  /* 헤더 둥근 테두리는 CSS로 */
  .grid > div.col-span-2:first-child {
    border-top-left-radius: 12px;
  }

  .grid > div.py-\[8px\]:nth-child(3),
  .grid > div.py-\[8px\]:nth-child(4) {
    border-top-right-radius: 12px;
  }
</style>

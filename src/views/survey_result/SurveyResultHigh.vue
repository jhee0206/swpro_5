<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

import FixedHeaderResult from "@/component/FixedHeaderResult.vue";
import NavigationBar from "@/component/NavigationBar.vue";
import ResultCheckButton from "@/component/ResultCheckButton.vue";
import ResultSafety from "@/component/ResultSafety.vue";

function handlePrev() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!-- 전체영역 -->
    <FixedHeaderResult
        prevLink="이전버튼"
        step="고위험"
        nextLink="다음버튼"
        @prev="handlePrev"
        safety="주의"
        color="#C31D1D"/>
    <div class="w-full flex flex-col justify-between flex-1"> <!-- 컨텐츠 -->
      <div class="w-full h-[200px] bg-black"> <!-- 그래프 -->

      </div>
      <div class="py-[20px]">
        <ResultSafety/>
      </div>
      <div> <!-- 텍스트 -->
        <p class="information-text">
          현재 <span class="font-bold">고위험</span> 단계에 해당합니다!<br>
          약물 사용 문제가 심각한 수준일 수 있어요.<br>
          <span class="font-bold">전문가와의 상담</span>을 통해 빠르게 조치를 받는 것이 중요합니다.<br><br>
          앱에서 도움을 받을 수 있는 경로를 안내해드릴게요.
        </p>
      </div>
      <div class="flex justify-center pb-[65px]"> <!-- 확인버튼 -->
        <ResultCheckButton
            @next=""/> <!-- 관련 카드 뉴스로 이동 -->
      </div>
    </div>
    <NavigationBar/>
  </div>
</template>

<style scoped>
.information-text {
  padding-top: 12px;
  padding-bottom: 32px;
  font-size: 16px;
}

</style>
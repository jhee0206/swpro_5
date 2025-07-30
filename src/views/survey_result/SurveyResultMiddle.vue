<script setup lang="ts">
import { useRouter } from 'vue-router'
import ResultFixedHeader from "@/component/ResultFixedHeader.vue";
import NavigationBar from "@/component/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";
import ResultSafety from "@/component/ResultSafety.vue";

const router = useRouter()

function handleNext() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!-- 전체영역 -->
    <ResultFixedHeader
        step="중등도 위험"
        safety="주의"
        color="#F5AF2D"/>
    <div class="w-full"> <!-- 컨텐츠 -->
      <div class="w-full h-[200px]"> <!-- 그래프 -->

      </div>
      <div class="py-[20px]">
        <ResultSafety/>
      </div>
      <div> <!-- 텍스트 -->
        <p class="information-text">
          현재 <span class="font-bold">중등도</span> 위험 단계에 해당합니다!<br>
          약물 사용에 대한 <span class="font-bold">위험 신호</span>를 일부 보입니다.<br>
          지금은 큰 문제가 아니더라도,<br>
          습관이 누적되면 중독으로 변할 수 있어요. <br><br>
          지금 약물 대처법을 알려드릴게요.
        </p>
      </div>
      <div class="flex justify-center"> <!-- 확인버튼 -->
        <ButtonComponent
            nextLink="확인"
            @next="handleNext"/> <!-- 관련 카드 뉴스로 이동 -->
      </div>
    </div>
  </div>
  <NavigationBar/>
</template>

<style scoped>
.information-text {
  padding-top: 12px;
  padding-bottom: 32px;
  font-size: 16px;
}

</style>
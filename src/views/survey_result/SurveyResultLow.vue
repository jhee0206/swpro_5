<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

import FixedHeaderResult from "@/views/component/FixedHeaderResult.vue";
import NavigationBar from "@/views/component/NavigationBar.vue";
import ResultCheckButton from "@/views/component/ResultCheckButton.vue";

function handlePrev() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!-- 전체영역 -->
    <FixedHeaderResult
        prevLink="이전버튼"
        step="저위험"
        nextLink="다음버튼"
        @prev="handlePrev"
        safety="안전"
        color="#6AAA5B"/>
    <div class="w-full flex flex-col justify-between flex-1"> <!-- 컨텐츠 -->
      <div class="w-full h-[300px] bg-black"> <!-- 그래프 -->

      </div>
      <div> <!-- 텍스트 -->
        <p class="information-text">현재 저위험 단계에 해당합니다! <br>
          주기적인 자가진단을 권장하며 자기보호를 위한 상황별 대응법이 중요합니다. <br> <br>
          해당 카드뉴스를 안내해드리겠습니다.</p>
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
  border-top-width: 2px;
  border-top-color: #2260FF;
  padding-top: 40px;
  padding-bottom: 40px;
  font-size: 16px;
}

</style>
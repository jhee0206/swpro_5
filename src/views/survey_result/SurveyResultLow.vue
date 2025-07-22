<script setup lang="ts">
import { useRouter } from 'vue-router'
import ResultFixedHeader from "@/component/ResultFixedHeader.vue";
import NavigationBar from "@/component/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";
import ResultSafety from "@/component/ResultSafety.vue";

const router = useRouter()

function handlePrev() {
  router.push('/')
}
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!-- 전체영역 -->
    <ResultFixedHeader
        step="저위험"
        safety="안전"
        color="#6AAA5B"/>
    <div class="w-full flex flex-col justify-between flex-1"> <!-- 컨텐츠 -->
      <div class="w-full h-[200px] bg-black"> <!-- 그래프 -->

      </div>
      <div class="py-[20px]">
        <ResultSafety/>
      </div>
      <div> <!-- 텍스트 -->
        <p class="information-text">
          현재 <span class="font-bold">저위험</span> 단계에 해당합니다!<br>
          <span class="font-bold">주기적인 자가진단</span>을 권장하며 자기보호를 위한 상황별 대응법이 중요합니다.<br><br>
          해당 카드뉴스를 안내해드리겠습니다.
        </p>
      </div>
      <div class="flex justify-center pb-[65px]"> <!-- 확인버튼 -->
        <ButtonComponent
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
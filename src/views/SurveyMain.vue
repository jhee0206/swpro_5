<script setup lang="ts">
import {useRouter} from "vue-router";
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import ButtonComponent from "@/component/ButtonComponent.vue";

const router = useRouter()

function handleNext() {
  router.push('/survey/q1')
}

function handlePrev() {
  router.push({ name: 'CardNewsMain' })
}
</script>

<template>
  <div class="min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader
      prevLink="이전으로"
      @prev="handlePrev"
    />
    <div class="w-full"> <!-- 컨텐츠 -->
      <div class="w-full border-[1px] border-[#456] rounded-[8px] p-[12px]">
        <p class="p-[12px] font-bold">설문 소개</p>
        <p class="survey-descript">  ASSIST는 'Alcohol, Smoking, Substance Involvement Screening Test’의 약자로 세계
          보건기구 (WHO)에서 개발한 알코올, 담배, 약물 사용 문제 선별 및 단기개입 도구입니다.<br><br>
          해당 검사문항에서는, 지난 3개월 혹은 일생 동안 알코올, 담배 제제, 약물을 사용한 경험에 대해 질
          문할 것입니다. 이런 물질들은 흡연, 삼키기, (코)흡입, 주사 등 모든 경로로 투여된 것을 의미합니다.<br><br>
          나열된 물질 중 의사가 처방한 대로 사용한 약물은 제외하고, 처방된 목적 외에 다른 이유로 사용하
          거나, 처방된 것보다 더 자주 혹은 더 많은 용량을 사용한 적이 있다면 체크해 주시기 바랍니다. </p>
      </div>
      <div class="w-full flex justify-center pt-[32px] mb-[65px]">
        <ButtonComponent
            nextLink="자가진단 시작하기"
            @next="handleNext"/>
      </div>
    </div>
    <NavigationBar/>
  </div>
</template>

<style scoped>
.survey-descript {
  font-size: 14px;
  padding: 12px;
  color: #888;
}
</style>

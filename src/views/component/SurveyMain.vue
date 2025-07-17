<script setup lang="ts">
import FixedHeader from "@/views/component/FixedHeader.vue";
import NavigationBar from "@/views/component/NavigationBar.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen w-full lg:max-w-[50%] mx-auto p-[20px]"> <!--전체 영역 -->
    <FixedHeader
        prevLink="#"
        title="SBIRT-ASSIST"/>
    <div class="w-full flex flex-col justify-between flex-1"> <!-- 컨텐츠 -->

      <div class="w-full flex  flex-col border-[1px] border-[#456] rounded-[8px] p-[12px]">
        <p class="p-[12px] font-bold">설문 소개</p>
        <p class="survey-descript">  ASSIST는 'Alcohol, Smoking, Substance Involvement Screening Test’의 약자로 세계
          보건기구 (WHO)에서 개발한 알코올, 담배, 약물 사용 문제 선별 및 단기개입 도구입니다.<br><br>
          해당 검사문항에서는, 지난 3개월 혹은 일생 동안 알코올, 담배 제제, 약물을 사용한 경험에 대해 질
          문할 것입니다. 이런 물질들은 흡연, 삼키기, (코)흡입, 주사 등 모든 경로로 투여된 것을 의미합니다.<br><br>
          나열된 물질 중 의사가 처방한 대로 사용한 약물은 제외하고, 처방된 목적 외에 다른 이유로 사용하
          거나, 처방된 것보다 더 자주 혹은 더 많은 용량을 사용한 적이 있다면 체크해 주시기 바랍니다. </p>
      </div>
      <div class="">
        <div class="px-[24px] py-[12px]"><p class="font-bold">위험도 평가</p></div>
        <div class="flex justify-between">
          <div class="safety-low-div">
            <p class="safety-low-p">저위험</p>
            <p class="safety-step-descript">약물 0-3점,<br> 알코올 0-10점</p>
          </div>
          <div class="safety-middle-div">
            <p class="safety-middle-p">중증도 위험</p>
            <p class="safety-step-descript">약물 4-26점,<br> 알코올 11-26점</p>
          </div>
          <div class="safety-high-div">
            <p class="safety-high-p">고위험</p>
            <p class="safety-step-descript">27점 이상</p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center pb-[65px]">
        <router-link to="/survey/q1" class="survey-start-button"><span>자가 설문 시작하기</span></router-link>
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

.survey-start-button {
  background-color: #2260FF;
  color: #ffffff;
  font-size: 16px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 8px;
}

.safety-low-p {
  font-size: 14px;
  text-align: center;
  border-top-left-radius: 8px;
  color: #ffffff;

}
.safety-middle-p {
  font-size: 14px;
  text-align: center;
  color: #ffffff;

}
.safety-high-p {
  font-size: 14px;
  text-align: center;
  color: #ffffff;

}

.safety-low-div {
  background-color: #6AAA5B;
  padding: 8px;
  flex: 1 1 0%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.safety-middle-div {
  background-color: #F5AF2D;
  padding: 8px;
  flex: 1 1 0%;
}

.safety-high-div {
  background-color: #C31D1D;
  padding: 8px;
  flex: 1 1 0%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.safety-step-descript {
  font-size: 11px;
  text-align: center;
  color: #ffffff;

}
</style>
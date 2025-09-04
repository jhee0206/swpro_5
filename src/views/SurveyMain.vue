<script setup lang="ts">
import {useRouter} from "vue-router";
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import GoToSurveyButton from "@/component/GoToSurveyButton.vue";

const router = useRouter()

function handleNext() {
  router.push('/survey/q1')
}
</script>

<template>
  <FixedHeader/>
  <div class="wrapper"> <!-- 콘텐츠 영역 -->
    <div class="flex flex-justify pt-[20px] pb-[12px]"> <!-- 검사 전 꼭 확인해주세요! -->
      <div><img src="/survey/survey_check_circle.svg"/></div>
      <p class="p-[5px]"></p>
      <p class="test-check"> 검사 전 꼭 확인 해주세요! </p>
    </div>
    <div class="horizontal-scroll"> <!-- 가로 스크롤 영역 -->
        <div class="item"> <!-- 1번 화면 -->
          <div><p class="text-title">ASSIST는 어떤 검사인가요?</p></div>
          <div><img class="image" src="/public/survey/survey_img1.svg"/></div>
          <div class="dividing-line"></div>
          <div class="text"><p>ASSIST 검사는 세계보건기구(WHO)가 개발한 알코올, 담배, <span class="text-span">약물 사용 문제 선별 도구</span>입니다.
            사용자의 물질 사용 경험을 파악하여 단기 개입이 필요한지를 확인합니다.</p></div>
        </div>
        <div class="item"> <!-- 2번 화면 -->
          <div><p class="text-title">검사에서는 무엇을 물어보나요?</p></div>
          <div><img class="image" src="/public/survey/survey_img2.svg"/></div>
          <div class="dividing-line"></div>
          <div class="text">
            <p>검사문항에는, 최근 3개월 또는 일생 동안 알코올, 담배 제제, 약물 사용 경험을 질문합니다.</p>
            <p class="text-[#23ADB4]">'사용'이란 흡연, 복용, 코흡입, 주사 등 모든 투여 경로를 포함합니다.</p>
          </div>
        </div>
        <div class="item"> <!-- 3번 화면 -->
          <div><p class="text-title">검사 시 유의사항은 무엇인가요?</p></div>
          <div><img class="image" src="/public/survey/survey_img3.svg"/></div>
          <div class="dividing-line"></div>
          <div class="text">
            <p>의사의 처방에 따라 정해진 용도로 사용한 약물은 제외됩니다.</p>
            <p>아래와 같은 경우는 체크해 주세요:</p>
            <div class="flex align-item">
              <img class="pr-[5px]" src="/public/survey/survey_check.svg"/>
              <p class="text-[#23ADB4]">처방 목적 외에 사용한 경우</p>
            </div>
            <div class="flex align-item">
              <img class="pr-[5px]" src="/public/survey/survey_check.svg"/>
              <p class="text-[#23ADB4]">정해진 용량보다 더 자주 또는 많이 사용한 경우</p>
            </div>
          </div>
        </div>
    </div>
    <div> <!-- 검사하러 가기 버튼 -->
      <GoToSurveyButton
          nextLink="검사하러 가기"
          @next="handleNext"/>
    </div>
  </div>
  <NavigationBar/>
</template>

<style scoped>
.wrapper {
  width: 100vw;
  height: 90vh;
  padding-left: 18px;
  padding-right: 18px;
  background-color: #F8F8F8;
  font-family: 'Pretendard', serif;
}

.test-check {
  font-size: 18px;
  font-weight: bold;
  line-height: 26px;
  color: #23ADB4;

}

.horizontal-scroll {
  display: flex;
  flex-direction: row;
  overflow-x: auto;       /* 가로스크롤 생성 */
  gap: 16px;              /* 항목간 간격 */
  padding: 12px 0;
  scroll-snap-type: x mandatory;  /* 스냅 효과 */
}

.item {
  min-width: 100%;       /* 각 아이템의 고정 너비 */
  height: 55vh;
  background: #FFFFFF;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 6.8px 1px rgba(130, 130, 130, 0.25);
  font-family: 'Pretendard', serif;
  font-size: 18px;
}

.dividing-line {
  width: 80vw;
  height: 1px;
  background-color: #9C9C9C;
}

.text-title {
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  color: #292929;
}

.text {
  font-size: 14px;
  line-height: 22px;
  font-weight: 100;
  color: #555555;
  padding-top: 2vh;
  padding-left: 5vh;
  padding-right: 5vh;
}

.text-span {
  font-weight: 200;
  color: #292929;
}

.image {
  padding-top: 2vh;
  padding-bottom: 2vh;
}
</style>

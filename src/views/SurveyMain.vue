<script setup lang="ts">
import {useRouter} from "vue-router";
import FixedHeader from "@/component/FixedHeader.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import GoToSurveyButton from "@/component/GoToSurveyButton.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const router = useRouter()
const modules = [Pagination];

function handleNext() {
  router.push('/survey/q1')
}

</script>

<template>
  <FixedHeader/>
  <div class="wrapper"> <!-- 콘텐츠 영역 -->
    <div class="flex flex-justify items-center pt-[2%] pb-[2%]"> <!-- 검사 전 꼭 확인해주세요! -->
      <img src="/survey/survey_check_circle.svg"/>
      <p class="p-[5px]"></p>
      <p class="test-check"> 검사 전 꼭 확인 해주세요! </p>
    </div>
    <div class="horizontal-scroll"> <!-- 가로 스크롤 영역 -->
      <swiper
          :spaceBetween="30"
          :pagination="{
      clickable: true,
      type: 'bullets'
    }"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide>
          <div class="item"> <!-- 1번 화면 -->
            <div><p class="text-title">ASSIST는 어떤 검사인가요?</p></div>
            <div><img class="image" src="/public/survey/survey_img1.svg"/></div>
            <div class="dividing-line"></div>
            <div class="text"><p>ASSIST 검사는 세계보건기구(WHO)가 개발한 알코올, 담배, <span class="text-span">약물 사용 문제 선별 도구</span>입니다.
              사용자의 물질 사용 경험을 파악하여 단기 개입이 필요한지를 확인합니다.</p></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item"> <!-- 2번 화면 -->
            <div><p class="text-title">검사에서는 무엇을 물어보나요?</p></div>
            <div><img class="image" src="/public/survey/survey_img2.svg"/></div>
            <div class="dividing-line"></div>
            <div class="text">
              <p>검사문항에는, 최근 3개월 또는 일생 동안 알코올, 담배 제제, 약물 사용 경험을 질문합니다.</p><br>
              <p class="text-[#23ADB4]">'사용'이란 흡연, 복용, 코흡입, 주사 등 <br>모든 투여 경로를 포함합니다.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item"> <!-- 3번 화면 -->
            <div><p class="text-title">검사 시 유의사항은 무엇인가요?</p></div>
            <div><img class="image" src="/public/survey/survey_img3.svg"/></div>
            <div class="dividing-line"></div>
            <div class="text-3pg">
              <p>의사의 처방에 따라 정해진 용도로 사용한 약물은 제외됩니다.</p><br>
              <p>아래와 같은 경우는 체크해 주세요:</p>
              <div class="flex align-item">
                <svg width="20" height="20" viewBox="-4 -4 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79068 0.204959C9.92471 0.336234 10 0.514257 10 0.69988C10 0.885503 9.92471 1.06353 9.79068 1.1948L4.07129 6.79504C3.93722 6.92628 3.75541 7 3.56584 7C3.37626 7 3.19445 6.92628 3.06038 6.79504L0.200688 3.99492C0.0704584 3.86289 -0.00160187 3.68607 2.7026e-05 3.50252C0.00165592 3.31897 0.0768437 3.1434 0.209396 3.01361C0.341949 2.88382 0.521261 2.81019 0.708712 2.8086C0.896163 2.807 1.07675 2.87756 1.21159 3.00508L3.56584 5.31028L8.77978 0.204959C8.91385 0.073724 9.09566 0 9.28523 0C9.4748 0 9.65661 0.073724 9.79068 0.204959Z" fill="#23ADB4"/>
                </svg>
                <p class="text-[#23ADB4]">처방 목적 외에 사용한 경우</p>
              </div>
              <div class="flex align-item">
                <svg width="20" height="20" viewBox="-4 -4 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.79068 0.204959C9.92471 0.336234 10 0.514257 10 0.69988C10 0.885503 9.92471 1.06353 9.79068 1.1948L4.07129 6.79504C3.93722 6.92628 3.75541 7 3.56584 7C3.37626 7 3.19445 6.92628 3.06038 6.79504L0.200688 3.99492C0.0704584 3.86289 -0.00160187 3.68607 2.7026e-05 3.50252C0.00165592 3.31897 0.0768437 3.1434 0.209396 3.01361C0.341949 2.88382 0.521261 2.81019 0.708712 2.8086C0.896163 2.807 1.07675 2.87756 1.21159 3.00508L3.56584 5.31028L8.77978 0.204959C8.91385 0.073724 9.09566 0 9.28523 0C9.4748 0 9.65661 0.073724 9.79068 0.204959Z" fill="#23ADB4"/>
                </svg>
                <p class="text-[#23ADB4]">정해진 용량보다 더 자주 또는 많이 사용한 경우</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
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
  scroll-snap-type: x mandatory;  /* 스냅 효과 */
}

.item {
  min-width: 100%;       /* 각 아이템의 고정 너비 */
  height: 58vh;          /* 각 아이템의 고정 높이 */
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
  font-weight: normal;
  color: #555555;
  padding-top: 2vh;
  padding-left: 5vh;
  padding-right: 5vh;
}

.text-span {
  font-weight: bold;
  color: #292929;
}

.text-3pg {
  font-size: 14px;
  line-height: 22px;
  font-weight: normal;
  color: #555555;
  padding-top: 2vh;
  padding-left: 5vh;
  padding-right: 5vh;
  text-align: left;
}

.image {
  padding-top: 2vh;
  padding-bottom: 2vh;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #ffffff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

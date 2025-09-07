<template>
  <div class="container">
    <h1 class="headline">
      <img src="@/assets/logo2.svg" alt="로고2" class="logo2" />
    </h1>
    <div class="logo-underline-shadow"></div>

    <!-- Swiper -->
    <Swiper
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        class="slogan-swiper"
    >
      <SwiperSlide>
        <img src="@/assets/mainlog.png" alt="슬로건1" class="slogan-logo" />
        <div class="logo-text1">중독은 <span class="text-aje">어제로,</span><br> 행복은 <span class="today">
          오늘로</span></div>
      </SwiperSlide>


      <SwiperSlide>
        <img src="@/assets/mainlog2.png" alt="슬로건2" class="slogan-logo" @click="goSurvey" />
        <div class="logo-text2">ASSIST 검사<br> 하러가기</div>
      </SwiperSlide>


    </Swiper>


    <div class="ajeroinfo">
      '어제로' 소개
    </div>

    <div class="content">

      <div class="diar-why">
        <div class="diar-item">
          <div class="diar-number">1</div>
          <div class="diar-text">
            <p><strong>어제로는 무엇인가요?</strong><br></p>
            '어제로(Addiction Zero)'는 중독에서 벗어나 건강한 일상으로 돌아가자는
            의미를 담은 디지털 중독 예방 플랫폼입니다.
          </div>
        </div>

        <div class="diar-item">
          <div class="diar-number">2</div>
          <div class="diar-text">
            <p><strong>제공하는 기능은 무엇인가요?</strong><br></p>
            서울시는 ASSIST 기반 상담 체계를 대학에 보급하고 있으며,
            어제로는 이를 바탕으로 자가진단, 교육, 하루톡, 챗봇 기능을 제공합니다.
          </div>
        </div>

        <div class="diar-item">
          <div class="diar-number">3</div>
          <div class="diar-text">
            <p><strong>앞으로의 '어제로'</strong><br></p>
            앞으로는 대학 상담센터와 연계해 실제 상담 도구 및 조기 개입 솔루션으로 확장할 예정입니다.
            <br><strong>예방의 시작, 어제로에서 만나보세요.</strong>
          </div>
        </div>
      </div>
    </div>

    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {useRouter} from "vue-router";

export default {
  name: "CardNewsMain",
  components: { NavigationBar, Swiper, SwiperSlide },
  setup() {

    const router = useRouter();

    const goSurvey = () => {
      router.push({name: "SurveyMain"});
    };

    return { Pagination, goSurvey };
  }
};
</script>

<style scoped>
.container {
  font-family: 'Pretendard', serif;
  text-align: center;
  padding: 30px 5vw 100px; /* NavigationBar 높이만큼 하단 여백 */
  width: 100%;
  margin: 0 auto;
}

.headline {
  font-size: 5vw;
  font-weight: bold;
  margin-bottom: 5vw;
  line-height: 1.5;
}

.logo-underline-shadow {
  position: relative;
  width: 100vw;
  height: 1px;
  margin: 1vw 0 2vw 0;
  background-color: #eee;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  left: 50%;
  transform: translateX(-50%);
}


/* 슬라이드 */
.slogan-swiper {
  width: 90vw;
  max-width: 393px;
  height: auto;
  margin: 0 auto 5vw auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
}

.slogan-logo {
  width: 100%;
  height: auto;
}

.ajeroinfo{
  font-size: 5vw;
  font-weight: bold;
  margin-top: 2vw;
  margin-bottom: 1vw;
  text-align: left;
  width: 95%;      /* 폭 넓힘 */
  max-width: 450px;
}

.content {
  width: 100%;       /* 폭 넓힘 */
  padding: 2px 2px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  text-align: justify;
  overflow: visible;
}


.diar-why {
  background-color: #F8F9F9;
  border-radius: 10px;
  padding: 15px 20px;
  margin-top: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.diar-item {
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
}

.diar-number {
  width: 28px;
  height: 28px;
  background-color: #B9E8EB;
  color: #1B898E;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.diar-text {
  flex: 1;
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}

.logo2{
  width: 45vw;
  max-width: 184px;
  height: auto;
  margin: 0 auto;
}

.logo2{
  width: 45vw;    /* 화면 크기에 맞춰 조정 */
  max-width: 184px;
  height: auto;
  margin: 0 auto;
}

.logo-text2{
  color: #fff;
  position: absolute;
  top: 10%;
  left: 28%;
  transform: translateX(-50%);
  font-size: clamp(27px, 5vw, 30px);
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
  /*font-family: 'S-Core Dream', serif;*/
}

.logo-text1{
  position: absolute;
  top: 20%;
  left: 30%;
  transform: translateX(-50%);
  font-size: clamp(27px, 5vw, 30px);
  font-weight: bold;
  color: #555555;
  text-align: center;
  line-height: 1.4;
  /*font-family: 'S-Core Dream', serif;*/
}

.text-aje {
  color: #0C8F96;  /* 어제로 */
}

.today {
  color: #1B67C4;  /* 오늘로 */
}

</style>

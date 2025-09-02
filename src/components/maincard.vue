<template>
  <div class="container">
    <h1 class="headline">
      <img src="@/assets/logo2.svg" alt="로고2" class="logo2" />
    </h1>

    <!-- Swiper -->
    <Swiper
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        class="slogan-swiper"
    >
      <SwiperSlide>
        <img src="@/assets/mainlog.svg" alt="슬로건1" class="slogan-logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="@/assets/mainlog2.svg" alt="슬로건2" class="slogan-logo" />
      </SwiperSlide>
    </Swiper>

    <div class="info-mes">
      <p class="info-text">
        <strong>‘어제로’(Addiction Zero)</strong>는 중독에서 벗어나 건강한 일상으로 돌아가자는 의미를 담고 있습니다.<br /><br />
        서울시는 대학생 마약류 오남용에 대응하기 위해 ASSIST 기반 상담 체계를 도입하고, 이를 대학에 보급하고 있습니다.
        ‘어제로’는 이 상담 지침을 기반으로, 자가진단, 교육 콘텐츠, 하루톡, 챗봇 기능을 통합한 디지털 중독 예방·개입 플랫폼입니다.
        향후 대학 상담센터와 연계해 실제 상담 도구 및 조기 개입 솔루션으로 확장될 예정입니다.<br /><br />
        <strong>예방의 시작, 어제로에서 만나보세요.</strong>
      </p>
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

export default {
  name: "CardNewsMain",
  components: { NavigationBar, Swiper, SwiperSlide },
  setup() {
    return { Pagination };
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 30px 20px;
  font-family: 'Cafe24 Ssurround', serif;
  touch-action: none;
}

.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.5;
}

/* 슬라이드 */
.slogan-swiper {
  width: 355px;
  height: 249.5px;
  margin: 0 auto 20px auto; /* 중앙 정렬 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
}



.info-mes {
  max-height: 40vh;
  padding: 20px;
  margin: 20px 0;
  border-radius: 12px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.05);
  overflow-y: auto;
  text-align: left;
}

.info-text {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
  white-space: pre-line;
}

.logo2{
  width: 184.56px;
  height: 44.25px;
  top:70px;
  left:104px;
  margin: 0 auto;
}
</style>

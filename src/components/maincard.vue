<template>
  <div class="container">
    <h1 class="headline">
      중독은 어제로, <br>
      행복은 오늘로
    </h1>
    <hr class="divider" />
    <div class="button-grid" >
      <button class="nav-button" @click="goToNextPage('education')">카드뉴스 보기</button>
      <button class="nav-button" @click="goToNextPage('list')">자가진단 하기</button>
      <button class="nav-button" @click="goToNextPage('chatbot')">챗봇 이용</button>
      <button class="nav-button" @click="goToNextPage('support')">마음일기 작성</button>
  </div>

    <hr class="divider" />

    <div class="info-mes">
    <p class="info-text">
      <strong>중독은 어제로, 행복은 오늘로.</strong><br><br>
        ‘어제로’는 Addiction Zero, 즉 중독 물질에서 벗어나 건강한 어제로 돌아가자는 의미를 담고 있습니다.<br><br>
        서울시는 최근 대학 내 마약류 오남용 문제에 대응하기 위해, 전문 상담 인력을 양성하고 WHO의 ASSIST 도구를 기반으로 한 표준화된 중독 상담 체계를 대학 현장에 도입하고 있습니다.<br><br>
        ‘어제로’는 이러한 상담 지침을 바탕으로, 학생이 스스로 중독 위험을 점검하고 예방에 참여할 수 있도록 개발된 디지털 기반 중독 예방 및 개입 플랫폼입니다.<br><br>
        ASSIST 기반 자가진단을 중심으로, 중독 예방 교육 콘텐츠, 하루 감정 일지 ‘하루톡’, 상담 연계용 챗봇 등 다양한 기능을 통합하여 실질적인 개입과 회복을 지원합니다.<br><br>
        향후에는 서울시 내 대학 상담센터와의 연계를 통해 실제 상담 현장에서 활용 가능한 보조 도구이자, 중독 위험군 조기 발굴을 위한 확장형 솔루션으로 발전할 수 있습니다.<br><br>
        지금, 정책과 기술이 만나는 첫걸음. 그 출발점을 ‘어제로’에서 시작해보세요.
    </p>
  </div>
    <NavigationBar />
  </div>
  </template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name:"CardNewsMain",
  components: {NavigationBar},
  methods:{
    goToNextPage(page){
      this.$router.push(`/${page}`);
    }
    }
  };
</script>


<style scoped>
.container{
  text-align:center;
  padding: 30px 20px;
  font-family: 'Cafe24 Ssurround',serif;
  touch-action: none;
}

.headline{
  font-size:24px;
  font-weight:bold;
  margin-bottom: 10px;
  line-height: 1.5;
}
.divider {
  width: 100%;
  margin: 20px auto;
  border: none;
  height: 1px;
  background-color: #2260FF;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.nav-button {
  background-color: white;
  color: rgba(90, 114, 170, 0.81);
  padding: 30px 10px;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s;
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


</style>

<template>
  <div class="container">
    <h1 class="headline">
      로고!
    </h1>
    <div class="button-grid" >
      <button class="nav-button" @click="goToNextPage('education')">슬로건 자리</button>
  </div>

    <div class="info-mes">
    <p class="info-text">
      <strong>‘어제로’(Addiction Zero)</strong>는  중독에서 벗어나 건강한 일상으로 돌아가자는 의미를 담고 있습니다.<br><br>
      서울시는 대학생 마약류 오남용에 대응하기 위해 ASSIST 기반 상담 체계를 도입하고, 이를 대학에 보급하고 있습니다.
      ‘어제로’는 이 상담 지침을 기반으로, 자가진단, 교육 콘텐츠, 하루톡, 챗봇 기능을 통합한 디지털 중독 예방·개입 플랫폼입니
      다. 향후 대학 상담센터와 연계해 실제 상담 도구 및 조기 개입 솔루션으로 확장될 예정입니다.<br><br>
      <strong>예방의 시작, 어제로에서 만나보세요.</strong>
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
  margin-bottom: 30px;
  line-height: 1.5;
}


.button-grid {
  padding: 0 20px;
  margin-bottom: 20px;
}

.nav-button {
  width: 100%;
  background-color: white;
  color: rgba(90, 114, 170, 0.81);
  padding: 30px 10px;
  border: 1.5px solid #2260FF;
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

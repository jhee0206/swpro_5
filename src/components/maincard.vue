<template>
  <div class="container">
    <h1 class="headline">
      작은 관심이 만드는<br>
      마약 없는 세상
    </h1>
    <hr class="divider" />
    <h2 class="sub-headline">이동할 페이지의 버튼을 눌러주세요!</h2>
    <div class="button-grid" >
      <button class="nav-button" @click="goToNextPage('education')">예방 교육</button>
      <button class="nav-button" @click="goToNextPage('news')">관련 뉴스</button>
      <button class="nav-button" @click="goToNextPage('check')">자가 진단</button>
      <button class="nav-button" @click="goToNextPage('support')">도움 받기</button>
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
  overflow: hidden;
  touch-action: none;
}

.headline{
  font-size:24px;
  font-weight:bold;
  margin-bottom: 10px;
  line-height: 1.5;
}
.divider {
  width: 80%;
  margin: 10px auto;
  border: none;
  height: 1px;
  background-color: #2260FF;
}

.sub-headline {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.nav-button {
  background-color: #2260FF;
  color: white;
  padding: 20px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s;
}


</style>

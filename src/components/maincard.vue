<template>
  <div class="container">
    <h1 class="headline">
      작은 관심이 만드는<br>
      마약 없는 세상
    </h1>
    <hr class="divider" />
    <div class="button-grid" >
      <button class="nav-button" @click="goToNextPage('education')">카드뉴스 보기</button>
      <button class="nav-button" @click="goToNextPage('list')">자가진단 하기</button>
      <button class="nav-button" @click="goToNextPage('chatbot')">챗봇 이용</button>
      <button class="nav-button" @click="goToNextPage('support')">마음일기 작성</button>
  </div>


    <hr class="divider" />
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
  width: 100%;
  margin: 20px auto;
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


</style>

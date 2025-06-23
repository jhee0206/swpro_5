<template>
  <div class="container">
    <h1 class="headline">
      작은 관심이 만드는<br>
      마약 없는 세상
    </h1>
    <hr class="divider" />
    <button class="arrow-button" @click="goToNextPage">
      &raquo;
    </button>
    <h2 class="sub-headline">오늘의 카드뉴스</h2>
    <button class="card-button" @click="goToDetail">
      <img :src="'/optimize.png'" alt="maincardnews" class="card-image"/>
    </button>
  </div>
</template>

<script>
export default {
  name:"CardNewsMain",
  methods:{
    goToNextPage(){
      //this.$router.push('/예지페이지');
    },
    goToDetail(){
      this.$router.push({ path: '/detail', query: { type: 'main' } });
      //예지 파일에도 루트 설정해줘야 함! 이 타입 이름으로 카드뉴스디테일 창에 구현.
      }
    }
  }
</script>

<style scoped>
.container{
  text-align:center;
  padding: 30px 20px;
  font-family: 'Cafe24 Ssurround',serif;
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
  background-color: #1a4eff;
}

.sub-headline {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
}

.card-button {
  width: 70%;
  height: 280px;
  margin: 0 auto;
  background-color: #ddd;
  border-radius: 10px;
}

.card-image{
  width: 98%;
  height: 95%;
  object-fit:cover;
}

.arrow-button{
  position: absolute;
  top: 17.5%;
  right:17%;
  font-size: 12px;
  color: #1a4eff;
}

</style>
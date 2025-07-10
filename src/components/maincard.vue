<template>
  <div class="container">
    <h1 class="headline">
      작은 관심이 만드는<br>
      마약 없는 세상
    </h1>
    <hr class="divider" />
    <h2 class="sub-headline">오늘의 카드뉴스</h2>
    <button class="card-button" @click="goToDetail">
      <img :src="'/optimize.png'" alt="maincardnews" class="card-image"/>
    </button>
    <Button_com
        :customStyle="{ position: 'absolute', bottom: '125px', right: '80px', fontSize: '15px'}"
        label="더보기"
        @click="goToNextPage"
    />

    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import Button_com from "@/components/Button_com.vue";

export default {
  name:"CardNewsMain",
  components: {NavigationBar, Button_com},
  methods:{
    goToNextPage(){
      this.$router.push('/NextDetailWindow');
    },
    goToDetail(){
      this.$router.push({ path: '/detail', query: { type: 'main' } });
      },
    }
  }
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

.card-button {
  width: 70%;
  height: 280px;
  margin: 0 auto;
  background-color: #ddd;
  border-radius: 10px;
  display: block;
}

.card-image{
  width: 98%;
  height: 95%;
  object-fit:cover;
}

</style>

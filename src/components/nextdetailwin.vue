<template>
  <div class="container">
    <header class="header">
    <h1 class="headline"><br>오늘은 어떤 카드뉴스가<br> 궁금하세요? </h1>
    </header>
    <div class ="card-grid">
      <button
          v-for="(card, index) in cardList"
          :key="card.type"
          class="card-button"
          @click="goToDetail(card.type)">
        <img :src="card.image" :alt="`card-${index}`" class="card-image" />
      </button>

    </div>
  </div>
  <NavigationBar />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import BackButton from "@/components/BackButton.vue";


export default {
  name: "NextDetailwin",
  components: {BackButton, NavigationBar},
  data(){
    return{
      cardList:[
        { type: "sub0", image: "/sub0/sns속 마약 유혹 001.png" },
        { type: "sub1", image: "/sub1/마약 한번이면 중독001.png" },
        { type: "sub2", image: "/sub2/작은 방심001.png" },
        { type: "sub3", image: "/sub3/건강을 지켜라 001.png" },
        { type: "sub4", image: "/sub4/얼마나001.png" },
        { type: "sub5", image: "/sub5/어떻게 치료하지001.png" },
        { type: "sub6", image: "/sub6/유형 및 처벌001.png" },
        { type: "sub7", image: "/sub7/탈마약중독001.png" },
        { type: "sub8", image: "/sub8/이게마약 001.png"},
        { type: "sub9", image: "/sub9/마약 경로와 예방법001.png" }
      ],
    };
  },
  methods:{
    goToDetail(type) {
      this.$router.push({ path: '/detail', query: { type } });
    },
    }
};
</script>

<style scoped>
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: 'Pretendard', serif;
}

.header{
  width: 100%;
  text-align: center;
  background-color: #fff;
  position: relative;
  z-index: 10;
  margin-bottom: 20px;
}

.header::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin-top: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.headline {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.5;
}


.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding-bottom: 80px;
}

.card-button {
  width: 150px;
  height: 150px;
  background-color: #ddd;
  border-radius: 12px;
  border: 0.5px solid #C2C2C2;
  overflow: hidden;
  padding: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow{
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 28px;
  color: #333333;
  z-index: 100;
}
</style>

<template>
  <div class="container">
    <h1 class="headline">카드뉴스를 선택하세요!</h1>
    <div class ="card-grid">
      <button
          v-for="(card, index) in cardList"
          :key="card.type"
          class="card-button"
          @click="goToDetail(card.type)">
        <img :src="card.image" :alt="`card-${index}`" class="card-image" />
      </button>
      <Button_com
          :customStyle="{ marginTop: 'auto', alignSelf: 'flex-end', padding: '20px 20px'}"
          label="이전으로"
          @click="GoBack"
      />
    </div>
  </div>
  <NavigationBar />
</template>

<script>
import Button_com from "@/components/Button_com.vue";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "NextDetailwin",
  components: {NavigationBar, Button_com},
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
    GoBack() {
      this.$router.push('/CardNewsMain');
    }
    }
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 30px 20px;
  font-family: 'Cafe24 Ssurround', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

.card-button {
  width: 150px;
  height: 150px;
  background-color: #ddd;
  border-radius: 12px;
  overflow: hidden;
  padding: 0;
  border: none;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

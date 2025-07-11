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
        { type: "sub0", image: "/sub0/truman.png" },
        { type: "sub1", image: "/sub1/black.png" },
        { type: "sub2", image: "/sub2/spider.png" },
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
  width: 100px;
  height: 100px;
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

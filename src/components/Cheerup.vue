<template>
  <div class="container">
    <BackButton :to="'/DiarList'"/>
    <h1 class="headline"><br>{{ headlineMessage }} <br><br>아래의 카드뉴스를 확인해 봅시다!</h1>
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
        { type: "cheer01", image: "/cheer01/운동할결심01.png" },
        { type: "cheer02", image: "/cheer02/올바른물섭취01.jpg" },
        { type: "cheer03", image: "/cheer03/건강한수면습관01.png" }
      ],
    };
  },
  computed: {
    headlineMessage(){
      const latestDiary = JSON.parse(localStorage.getItem("diaryList"))?.slice(-1)[0];
      if(!latestDiary) return "영역이 부족하시네요.";

      const {water, hour, exercise} = latestDiary.checklist;
      const message = [];

      if(["1cup", "2_4cup", "11cup"].includes(water)) message.push("수분");
      if (["4hour", "5_6hour", "10hour"].includes(hour)) message.push("수면");
      if (exercise === "no") message.push("운동");

      return message.join(", ")+" 영역이 부족하시네요. "
    }
  },

  methods:{
    goToDetail(type) {
      this.$router.push({ name: 'Cheerup_detail', params: { type } });
    }

  }
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

.arrow{
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 28px;
  color: #333333;
  z-index: 100;
}
</style>

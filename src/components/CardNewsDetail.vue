<template>
  <div class="detail-container">
    <div class="image-list">
      <img
        v-for="(img,index) in getImageList"
        :key="index"
        :src="getImagePath(img)"
        class="card-news"
        />
    </div>
    <Button_com
        :customStyle="{ marginTop: 'auto', alignSelf: 'flex-end', padding: '20px 20px'}"
        label="이전으로"
        @click="goBackToCardSelection"
    />
    <!--<button class="arrow-button_reverse" @click="goBackToCardSelection">
      이전으로
    </button>-->
  </div>
</template>

<script>
import Button_com from "@/components/Button_com.vue";

export default {
  name: 'CardNewsDetail',
  components: {Button_com},
  data() {
    return {
      type: this.$route.query.type || 'main',
      imageMap: {
        main: ['9-1-1.png', 'gojo.png', 'mission.png', 'titan.png', 'san.png'],
        sub0: ['truman.png', 'truman_rain.png', 'truman_sleep.png'],
        sub1: ['black.png', 'black_ia.png'],
        sub2: ['spider.png', 'spider_3.png', 'spider_book.png', 'spider_ia.png', 'spider_new.png']
      }
    };
  },
  computed: {
    getImageList() {
      return this.imageMap[this.type] || [];
    }
  },
  methods: {
    getImagePath(filename) {
      return `/${this.type}/${filename}`;
    },
    goBackToCardSelection() {
      if(this.type === 'main'){
        this.$router.push('/CardNewsMain');
      }else{
        this.$router.push('/NextDetailWindow');
      }
    }
  }
};
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.image-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.card-news {
  max-width: 100%;
  height: auto;
  display: block;
}

</style>

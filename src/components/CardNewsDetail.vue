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
    <button class="arrow-button_reverse" @click="goBackToCardSelection">
      이전으로
    </button>
  </div>
</template>

<script>
export default {
  name: 'CardNewsDetail',
  data() {
    return {
      type: this.$route.query.type || 'main',
      imageMap: {
        main: ['9-1-1.png', 'gojo.png', 'mission.png', 'titan.png', 'san.png'],
        sub0: ['truman.png', 'truman_rain.png', 'truman_sleep.png'],
        sub1: ['black.png', 'black_ia.png'],
        sub2: ['spider.png', 'spider_3.png', 'spider_book.png', 'spider_ia', 'spider_new.png']
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

.arrow-button_reverse {
  padding: 15px 30px;
  font-size: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>

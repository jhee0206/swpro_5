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
    }
  }
};
</script>

<style scoped>
</style>
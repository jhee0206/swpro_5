<template>
  <div class="detail-container">
    <BackButton :to="'/NextDetailWindow'"/>
    <div class="image-list" ref="imageList">
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
import BackButton from "@/components/BackButton.vue";

export default {
  name: 'CardNewsDetail',
  components: {BackButton},
  data() {
    return {
      type: this.$route.query.type,
      imageMap: {
        sub0: ['sns속 마약 유혹 001.png','sns속 마약 유혹 002.png','sns속 마약 유혹 003.png',
          'sns속 마약 유혹 004.png','sns속 마약 유혹 005.png','sns속 마약 유혹 006.png',
          'sns속 마약 유혹007.png','sns속 마약 유혹008.png'],
        sub1: ['마약 한번이면 중독001.png', 'mayak_addiction_002.png','마약 한번이면 중독003.png',
          '마약 한번이면 중독004.png','마약 한번이면 중독005.png','마약 한번이면 중독006.png',
          '마약 한번이면 중독007.png','마약 한번이면 중독008.png'],
        sub2: ['작은 방심001.png','작은 방심 002.png','작은 방심003.png','작은 방심004.png','작은 방심 005.png',
          '작은 방심 006.png','작은 방심007.png','작은 방심008.png','작은 방심009.png','작은 방심010.png'],
        sub3: ['건강을 지켜라 001.png','건강을 지켜라002.png','건강을 지켜라 003.png','건강을 지켜라004.png',
          '건강을 지켜라005.png','건강을 지켜라006.png','건강을 지켜라 007.png'],
        sub4: ['얼마나001.png','얼마나 002.png','얼마나 003.png','얼마나004.png','얼마나 005.png',
          '얼마나006.png','얼마나 007.png','얼마나 008.png','얼마나 009.png'],
        sub5: ['어떻게 치료하지001.png','어떻게 치료하지002.png','어떻게 치료하지003.png','어떻게 치료하지 004.png',
          '어떻게 치료하지005.png','어떻게 치료하지006.png','어떻게 치료하지 007.png','어떻게 치료하지008.png',
          '어떻게 치료하지 009.png'],
        sub6: ['유형 및 처벌001.png','유형 및 처벌002.png','유형 및 처벌 003.png','유형 및 처벌004.png',
          '유형 및 처벌005.png','유형 및 처벌 006.png','유형 및 처벌 007.png'],
        sub7: ['탈마약중독001.png','탈마약중독002.png','탈마약중독003.png','탈마약중독 004.png',
          '탈마약중독005.png', '탈마약중독006.png'],
        sub8: ['이게마약 001.png','이게마약 002.png','이게마약 003.png','이게마약04.png','이게마약 005.png',
          '이게마약 006.png','이게마약 007.png','이게마약 008.png'],
        sub9:['마약 경로와 예방법001.png','마약 경로와 예방법 002.png','마약 경로와 예방법003.png',
          '마약 경로와 예방법 004.png','마약 경로와 예방법 005.png','마약 경로와 예방법006.png',
          '마약 경로와 예방법 007.png','마약 경로와 예방법008.png','마약 경로와 예방법009.png']
      }
    };
  },
  computed: {
    getImageList() {
      return this.imageMap[this.type] || [];
    }
  },
  mounted() {
    this.$nextTick(() => {
      const images = this.$refs.imageList.querySelectorAll('img');
      let loadedCount = 0;

      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              this.scrollToFirst();
            }
          };
        }
      });

      if (loadedCount === images.length) {
        this.scrollToFirst();
      }
    });
  },
  methods: {
    getImagePath(filename) {
      return `/${this.type}/${filename}`;
    },
    scrollToFirst() {
      if (this.$refs.imageList) {
        this.$refs.imageList.scrollLeft = 0;
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
  padding: 15px;
}

.image-list {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;
}

.card-news {
  flex: 0 0 100%;
  max-width: 100%;
  height: auto;
  display: block;
  scroll-snap-align: start;
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

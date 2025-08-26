<template>
  <div class="detail-container">
    <BackButton :to="'/Cheerup'"/>
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
  name: 'Cheerup_detail',
  components: {BackButton},
  data() {
    return {
      type: this.$route.query.type,
      imageMap: {
        cheer01: ['운동할결심01.png','운동할결심02.png','운동할결심03.png',
          '운동할결심04.png','운동할결심05.png','운동할결심06.png','운동할결심07.png'],
        cheer02: ['올바른물섭취01.jpg', '올바른물섭취02.jpg','올바른물섭취03.jpg',
          '올바른물섭취04.jpg','올바른물섭취05.jpg','올바른물섭취06.jpg',
          '올바른물섭취07.jpg','올바른물섭취08.jpg','올바른물섭취09.jpg'],
        cheer03: ['건강한수면습관01.png','건강한수면습관02.png','건강한수면습관03.png','건강한수면습관04.png','건강한수면습관05.png',
          '건강한수면습관06.png','건강한수면습관07.png']
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

</style>

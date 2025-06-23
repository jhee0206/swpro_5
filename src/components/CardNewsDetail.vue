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
  data(){
    return{
      type: this.$route.query.type || 'main',
      imageMap: {
        main: ['9-1-1.png','gojo.png','mission.png','titan.png','san.png']
        //예지파일 :[...]
      }
    };
  },
  computed:{
    getImageList(){
      return this.imageMap[this.type] || [];
    }
  },
  methods:{
    getImagePath(filename){
      return `/${this.type}/${filename}`;
    }
  }
};
</script>

<style scoped>
</style>
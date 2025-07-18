<template>
  <div class="image-wrapper">
    <img :src="imageData" alt="캡처된 일기 이미지" class="captured-image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageData: null,
    };
  },
  mounted() {
    // 예: 로컬스토리지에서 imageData 가져오기
    const diaryList = JSON.parse(localStorage.getItem('diaryList')) || [];
    if(diaryList.length > 0){
      // 맨 마지막 저장 이미지 예시
      this.imageData = diaryList[diaryList.length - 1].image;
    }
  },
};
</script>

<style scoped>
.image-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto; /* 필요 시 스크롤 */
}

.captured-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>


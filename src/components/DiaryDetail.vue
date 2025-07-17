<template>
  <div>
    <h2>저장된 일기 이미지</h2>
    <img :src="imageData" alt="캡처된 일기 이미지" />
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

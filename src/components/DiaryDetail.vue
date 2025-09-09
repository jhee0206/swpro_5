<template>
  <div class="image-wrapper">
    <img v-if="imageData" :src="imageData" alt="캡처된 일기 이미지" class="captured-image" />
  </div>
  <BackButton :to="'/DiarList'"/>
</template>

<script>
import BackButton from "@/components/BackButton.vue";
import { getAllDiaries } from "@/db.js"; // IndexedDB에서 일지를 가져오는 함수

export default {
  components: {BackButton},
  data() {
    return {
      imageData: null,
    };
  },
  async mounted() {
    const entryId = Number(this.$route.query.id);

    try {
      const diaryList = await getAllDiaries(); // IndexedDB에서 모든 일지 불러오기
      const foundEntry = diaryList.find(entry => entry.id === entryId);

      if (foundEntry) {
        this.imageData = foundEntry.image;
      } else {
        alert("일지를 찾을 수 없습니다.");
        this.$router.push('/DiarList');
      }
    } catch (error) {
      console.error("일지 불러오기 실패:", error);
      alert("일지 불러오기 중 오류가 발생했습니다.");
      this.$router.push('/DiarList');
    }
  }
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

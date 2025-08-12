<template>
  <div class="image-wrapper">
    <img :src="imageData" alt="캡처된 일기 이미지" class="captured-image" />
  </div>
  <Button_com
      :customStyle="{ marginTop: 'auto', alignSelf: 'flex-end', padding: '10px 10px'}"
      label="이전으로"
      @click="goBack"
  />
</template>

<script>
import Button_com from "@/components/Button_com.vue";

export default {
  components: {Button_com},
  data() {
    return {
      imageData: null,
    };
  },
  mounted() {
    const entryId = Number(this.$route.query.id);

    const diaryList = JSON.parse(localStorage.getItem('diaryList')) || [];

    const foundEntry = diaryList.find(entry => entry.id === entryId);

    if (foundEntry) {
      this.imageData = foundEntry.image;
    } else {
      // 혹시 모를 오류에 대비 (예: 해당 id의 글이 없을 경우)
      alert("일지를 찾을 수 없습니다.");
      this.$router.push('/DiarList');
    }
  },

  methods: {
    goBack() {
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


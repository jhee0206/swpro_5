<template>
  <div class="journal-image-page">
    <img src="/JournalImage.png" alt="Journal Image (Public Folder)" @click="goToSupportPage">
  </div>
</template>

<script>


export default {
  name: 'JournalImage',
  methods: {
    // 이미지를 클릭했을 때 호출될 메소드
    goToSupportPage() {
      // Vue 라우터의 push 메소드를 사용하여 '/support' 경로로 이동합니다.
      // 이 경로에 연결된 컴포넌트(MindCheckJournal.vue)가 렌더링됩니다.
      this.$router.push('/MindCheckJournal');

      // 또는 라우트 '이름'으로 이동할 수도 있습니다.
      // router/index.js에서 '/support' 라우트에 'name: 'SupportPage''를 추가했다면,
      // this.$router.push({ name: 'SupportPage' });
      // 이렇게 사용할 수 있습니다.
    }
  }
}
</script>

<style scoped>
.journal-image-page {
  padding: 20px;
  text-align: center;
  /* 이미지가 화면 중앙에 오도록 추가적인 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 65px); /* 화면 높이에서 하단 내비게이션바 높이를 뺀 값 */
  box-sizing: border-box;
}

.journal-image-page img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer; /* 클릭 가능하다는 시각적 표시 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.journal-image-page img:hover {
  transform: scale(1.02);
}
</style>
<template>
  <div class="journal-image-page">
    <img src="/JournalImage.png" alt="Journal Image (Public Folder)" @click="goToMindCheckJournal">
    <div class="button-container">
      <button class="action-button" @click="goToDiaryList">내가 쓴 일지</button>
      <button class="action-button" @click="goToMindCheckJournal">새 일지 쓰기</button>
    </div>
  </div>
</template>

<script>
// useRouter를 사용하지 않으므로 임포트할 필요 없음

export default {
  name: 'JournalImage',
  methods: {
    goToMindCheckJournal() {
      this.$router.push('/MindCheckJournal');
    },
    goToDiaryList() {
      this.$router.push('/DiarList'); // '/diarylist' 경로로 이동
    },
  }
}
</script>

<style scoped>
/* 전체 페이지 컨테이너 */
.journal-image-page {
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column; /* 이미지는 세로로 유지 */
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 65px);
  box-sizing: border-box;
}

.journal-image-page img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin-bottom: 30px; /* 이미지와 버튼 사이의 간격 유지 */
}

.journal-image-page img:hover {
  transform: scale(1.02);
}

/* 버튼들을 담을 컨테이너 스타일 */
.button-container {
  display: flex; /* ✨ 버튼들을 가로로 배열 ✨ */
  /* flex-direction: column; */ /* 더 이상 세로 배열이 아님 */
  gap: 15px; /* 버튼 사이의 간격 */
  width: 100%; /* 부모 너비에 맞춤 */
  max-width: 400px; /* 버튼 컨테이너의 최대 너비 (버튼들이 한 줄에 들어갈 수 있도록 조절) */
  margin-top: 20px; /* 이미지와 버튼 컨테이너 사이 간격 유지 */
  justify-content: center; /* 컨테이너 내에서 버튼들을 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 (한 줄이므로 큰 의미 없음) */
}

/* 개별 버튼 스타일 */
.action-button {
  flex: 1; /* ✨ 버튼들이 동일한 너비를 갖도록 flex 속성 추가 ✨ */
  padding: 15px 10px; /* 좌우 패딩을 줄여 텍스트가 너무 붙지 않도록 조절 */
  background-color: #FFF;
  color: #000000;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #1a4cd2;
}
</style>
<template>
  <header class="header">
    <div class="top-section">
      <div class="back-button" @click="goToMyRecord">
        <span class="arrow">&larr;</span>
      </div>
    </div>
  </header>
  <div class="content">
    <h2>마음 체크 일지</h2>
    <p>
      <br><strong>"나의 하루를 한 문장으로 표현해주세요.</strong>"<br><br>

      하루를 돌아보며, 지금의 감정이나 생각을 짧은 문장으로 남겨보세요.<br>
      기분, 느낀점, 특별한 순간 등 어떤 내용이든 괜찮아요.<br>
      꾸밈없이 솔직하게 적을수록 나를 더 잘 이해하는 데 도움이 됩니다.<br>
      작은 기록이 쌓이면 변화의 흐름을 알아차리는데 큰 힘이 돼요.<br>

      <br><strong>"왜 이 일지를 쓰는 걸까요?" ㅡ 회복을 위한 작은 기록의 힘</strong><br><br>

      1. 감정의 흐름을 마주 볼 수 있어요.<br>
      매일의 기분을 적으며 '나는 오늘 어떤 감정을 느꼈는지' 돌아볼 수 있습니다.<br>
      감정은 억누르는 게 아니라, 마주볼 때 비로소 가벼워지니까요.<br><br>

      2. 무너진 일상에 작은 리듬을 만들어줘요.<br>
      중독은 시간 감각과 생활 리듬을 흐트러뜨리지만,<br>
      이 일지를 통해 '나를 위한 하루 한 페이지'가 생깁니다.<br>
      이건 나를 다시 세우는 작은 습관이 됩니다.<br><br>

      3. 스스로를 돌보는 연습이 돼요.<br>
      오늘의 문구를 읽고, 내 기분을 적고, 나에게 말을 걸다 보면<br>
      점점 내 안의 '진짜 나'와 연결됩니다.<br>
      그건 중독의 목소리보다 더 소중한 내면의 목소리예요.</p>
  </div>
  <div class="button-container">
    <button class="action-button" @click="goToDiaryList">내가 쓴 일지</button>
    <button class="action-button" @click="goToMindCheckJournal">새 일지 쓰기</button>
  </div>
</template>

<script>
// useRouter를 사용하지 않으므로 임포트할 필요 없음

export default {
  name: 'JournalImage',
  methods: {
    goToMyRecord() {
      this.$router.push('/MyRecord');
    },
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
/* 헤더 - flex-direction: column으로 내부 구역들을 세로로 정렬 */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  padding-bottom: 20px;
}

/* 상단 구역 (뒤로가기 버튼) */
.top-section {
  width: 100%;
  padding: 15px 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.back-button {
  font-size: 28px;
  cursor: pointer;
  color: #333;
  padding: 5px;
}

/* 버튼들을 담을 컨테이너 스타일 */
.button-container {
  display: flex;
  gap: 15px;
  width: 100%;
  max-width: 550px; /* 기존 컨테이너의 max-width를 더 넓게 설정 */
  margin: 20px auto 40px; /* 위아래 마진 20px, 좌우 마진 auto로 컨테이너 자체를 중앙 정렬 */
  justify-content: center; /* 컨테이너 내에서 버튼들을 가로로 가운데 정렬 */
  align-items: center;
  padding-bottom: 40px;
}

/* 개별 버튼 스타일 */
.action-button {
  /* flex: 1;  <-- 이 속성을 제거하거나 주석 처리 */
  width: 150px; /* 버튼의 너비를 고정 */
  padding: 15px 10px;
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

.content {
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 20px;
  text-align: center;
}

/* 본문 단락 스타일 (p 태그) */
.content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
  word-break: keep-all;
  text-align: justify;
}

.content h2 {
  font-size: 24px; /* 글자 크기를 24px로 설정합니다. */
  font-weight: bold; /* 글자를 굵게 만듭니다. */
  color: #333; /* 글자 색상을 어두운 회색으로 설정합니다. */
  text-align: center; /* 글자를 가운데로 정렬합니다. */
  margin-bottom: 20px; /* 아래쪽 여백을 줍니다. */
}

</style>
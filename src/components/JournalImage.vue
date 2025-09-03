<template>
  <div class="my-record-container">
    <header class="header">
      <div class="top-section">
        <BackButton :to="'/MyRecord'"/>
      </div>

      <div class="title-section">
        <h1 class="page-title"> 마음 체크 일지 </h1>
      </div>
    </header>

    <div class="content">
    <p>
      <strong>"나의 하루를 한 문장으로 표현해주세요."</strong><br><br>
      하루를 돌아보며, 지금의 감정이나 생각을 짧은 문장으로 남겨보세요.
      기분, 느낀점, 특별한 순간 등 어떤 내용이든 괜찮아요.
      꾸밈없이 솔직하게 적을수록 나를 더 잘 이해하는 데 도움이 됩니다.
      작은 기록이 쌓이면 변화의 흐름을 알아차리는데 큰 힘이 돼요.<br></p>

      <div class="diar-why">
        <div class="diar-text">
      <strong>왜 이 일지를 쓰는 걸까요?<br></strong>
        </div>

        <div class="diar-item ">
          <div class="diar-number">1</div>
          <div class="diar-text">
            <p><strong> 흐름을 마주 볼 수 있어요.</strong><br></p>
            매일의 기분을 적으며 오늘의 감정을 돌아볼 수 있습니다. 감정은 억누르는 것이 아니라,
            마주볼 때 비로소 가벼워집니다.
          </div>
        </div>

        <div class="diar-item ">
          <div class="diar-number">2</div>
          <div class="diar-text">
            <p><strong>무너진 일상에 작은 리듬을 만들어줘요.</strong><br></p>
        중독은 시간 감각과 생활 리듬을 흐트러뜨리지만,
        이 일지를 통해 '나를 위한 하루 한 페이지'가 생깁니다.
        이건 나를 다시 세우는 작은 습관이 됩니다.
    </div>
        </div>

        <div class="diar-item ">
          <div class="diar-number">3</div>
          <div class="diar-text">
            <p><strong>스스로를 돌보는 연습이 돼요.</strong><br></p>
        오늘의 문구를 읽고, 내 기분을 적고, 나에게 말을 걸다 보면
        점점 내 안의 '진짜 나'와 연결됩니다.
        그건 중독의 목소리보다 더 소중한 내면의 목소리예요.
    </div>
  </div>

  </div>
  </div>

  <div class="button-container">
    <button class="action-button" @click="goToDiaryList">내가 쓴 일지</button>
    <button class="action-button" @click="goToMindCheckJournal">새 일지 쓰기</button>
  </div>
  <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: 'JournalImage',
  components: {BackButton, NavigationBar},
  data() {
    return {
      activeContent: null // 현재 열려 있는 항목 ID
    }
  },
  methods: {
    goToMyRecord() {
      this.$router.push('/MyRecord');
    },
    goToMindCheckJournal() {
      this.$router.push('/MindCheckJournal');
    },
    goToDiaryList() {
      this.$router.push('/DiarList');
    },
    toggleContent(contentId) {
      this.activeContent = this.activeContent === contentId ? null : contentId;
    }
  }
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 전체 페이지 컨테이너 */
.my-record-container {
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: calc(65px + 70px);
  font-family: 'Pretendard', serif;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
}

.top-section {
  width: 100%;
  padding: 15px 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.page-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.title-section {
  width: 100%;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
}

.diar-why {
  background-color: #F8F9F9;
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  font-family: 'Pretendard', serif;
}

.diar-item {
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
}

.diar-number {
  width: 28px;
  height: 28px;
  background-color: #B9E8EB;
  color: #1B898E;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  flex-shrink: 0;
}

.diar-text {
  flex: 1;
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}

.content {
  font-family: 'Pretendard', serif;
  font-size: 18px;
}
.button-container {
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 550px;
  margin: 5px auto 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 0;
}
.action-button {
  width: 150px;
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
  background-color: #258FB3;
  color: white;
}
.content {
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
  word-break: keep-all;
  text-align: justify;
}
.content h2 {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}


</style>

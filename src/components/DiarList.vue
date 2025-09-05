<template>
  <div class="diary-list-container">
    <header class="header">
      <div class="top-section">
        <BackButton :to="'/CardNewsMain'"/>
      </div>

      <div class="title-section">
        <h1 class="page-title"> 내가 쓴 일지 </h1>
      </div>
    </header>

    <div v-if="showPopup" class="popup-message">
      {{ popupMessage }}
    </div>

    <div class="diary-button-list">
      <div
          v-for="(entry) in sortedDailyList"
          :key="entry.id"
          class="diary-entry-box"
      >
        <span class="entry-date">{{ entry.date }}</span>
        <button class="view-button" @click="viewDiary(entry)">></button>
      </div>
    </div>
  </div>

  <NavigationBar />
</template>
<script>

import NavigationBar from "@/components/NavigationBar.vue";
import BackButton from "@/components/BackButton.vue";

export default {
  name: 'DiaryList',
  components: {BackButton, NavigationBar},
  data() {
    return {
      diaryList: [],
      showPopup: false,
      popupMessage: "",
    };
  },
  //computed: {
   // sortedDailyList() {

      computed: {
        sortedDailyList() {
          return [...this.diaryList].sort((a, b) => {
            const dateA = new Date(a.date.replace(/\./g, '-')).getTime();
            const dateB = new Date(b.date.replace(/\./g, '-')).getTime();
            return dateB - dateA; // 이제 number 타입끼리 연산이므로 오류 없음
          });
        },
      },
      //return [...this.diaryList].sort((a, b) => {
        //const dateA = new Date(a.date.replace(/\./g, '-'));
        //const dateB = new Date(b.date.replace(/\./g, '-'));
        //return dateB - dateA;
      //});
    //},
  //},
  mounted() {
    const stored = localStorage.getItem('diaryList');
    this.diaryList = stored ? JSON.parse(stored) : [];

    this.checkMilestonePopup();
  },
  watch: {
    diaryList(newList, oldList) {
      if (newList.length > oldList.length) {
        this.checkMilestonePopup();
      }
    },
    $route(to, from) {
      const stored = JSON.parse(localStorage.getItem('diaryList')) ||[];
      if(stored.length !== this.diaryList.length) {
        this.diaryList = stored;
        this.checkMilestonePopup();
      }
    }
  },

  methods: {
    viewDiary(entry) {
      this.$router.push({path: '/diarydetail', query: {id: entry.id}});
    },

    checkMilestonePopup() {
      const count = this.diaryList.length;

      const messages = {
        3: "스스로 건강을 챙기려는 노력이 이미 시작됐네요. 이렇게 기록하는 게 변화를 향한 중요한 첫걸음이에요!",
        7: "벌써 7번이나 기록했어요! 스스로 건강을 지키려는 마음이 꾸준히 이어지고 있다는 증거예요.",
        14: "14번째 기록까지 해내셨어요. 스스로 선택하고 실천한 결과가 이렇게 쌓여가고 있네요.",
        30: "30번째 기록을 달성했군요! 지금까지 보여준 꾸준함이 앞으로도 건강을 지켜주는 큰 힘이 될 거예요."
      };

      if (messages[count]) {
        this.popupMessage = messages[count];
        this.showPopup = true;

        setTimeout(() => {
          this.showPopup = false;
        }, 5000);
      }
    }
  }
}
</script>

<style scoped>

.diary-list-container {
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

.title-section {
  width: 100%;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
}

.page-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
}


.diary-button-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.diary-button-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.diary-entry-box {
  position: relative;
  border-radius: 12px;
  padding: 20px 20px 20px 16px;
  margin: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border: 1px solid #D9D9D9;
}

.diary-entry-box::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 10px;
  height: 100%;
  background-color: #23ADB4;
  border-radius: 12px 0 0 12px;
}


.entry-date {
  font-weight: bold;
}

.view-button {
  padding: 5px 3px;
  font-size: 20px;
  color: #555555;
}

.popup-message {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  color: black;
  padding: 30px 40px;
  border-radius: 12px;
  font-size: 20px;
  z-index: 999;
  text-align: center;
  box-shadow: 0 6px 8px rgba(0,0,0,0.2);
}


</style>
<script setup lang="ts">
</script>
<script setup lang="ts">
</script>

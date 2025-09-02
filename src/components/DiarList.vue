<template>
  <div class="diary-list-container">
    <BackButton :to="'/CardNewsMain'"/>
    <div class="top-bar">
      <h2>내가 쓴 일지</h2>
      <span class="sort-label">최신순</span>
    </div>

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
        <button class="view-button" @click="viewDiary(entry)">보기</button>
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
  computed: {
    sortedDailyList() {
      return [...this.diaryList].sort((a, b) => {
        const dateA = new Date(a.date.replace(/\./g, '-'));
        const dateB = new Date(b.date.replace(/\./g, '-'));
        return dateB - dateA;
      });
    },
  },
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
  padding: 25px 20px 90px;
  font-family: 'Cafe24 Ssurround', serif;
  background-color: #fcf5ed;
  min-height: 100vh;
  box-sizing: border-box;
  color: rgba(21, 20, 20, 0.74);
}

.diary-button-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.top-bar {
  position: relative; /* h2 중앙 위치 기준 */
  display: flex;
  justify-content: flex-end; /* 최신순 span은 오른쪽 */
  align-items: center;
  margin-bottom: 25px;
}

/* 중앙 텍스트 */
.top-bar h2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  margin: 0;
  color: #ff8c94;
}

.sort-label {
  font-size: 14px;
  color: #ff8c94;
}

.diary-button-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.diary-entry-box {
  border: 2px solid #ff8c94;
  border-radius: 12px;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  background-color: white;
}

.entry-date {
  font-weight: bold;
}

.view-button {
  border: 2px solid #ff8c94;
  background-color: white;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 10px;
  color: #ff8c94;
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

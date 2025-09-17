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
      <div class="popup-content">
        <h2 class="popup-title">{{ popupData.title }}</h2>
        <img v-if="popupData.image" :src="popupData.image" alt="Popup Image" class="popup-image"/>
        <p class="popup-text">{{ popupData.text }}</p>
      </div>
    </div>

    <div class="diary-button-list">
      <div v-for="(entry) in sortedDailyList" :key="entry.id" class="diary-entry-box">
        <div class="entry-content">
          <p class="entry-mood">{{ entry.mood }}</p>
          <span class="entry-date">{{ entry.date }}</span>
        </div>
        <button class="view-button" @click="viewDiary(entry)">></button>
      </div>
    </div>

    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import BackButton from "@/components/BackButton.vue";
import { getAllDiaries } from "@/db.js";

export default {
  name: 'DiaryList',
  components: {BackButton, NavigationBar},
  data() {
    return {
      diaryList: [],
      showPopup: false,
      popupData: {
        title: "",
        image: "",
        text: "",
      }
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
  async mounted() {
    try {
      this.diaryList = await getAllDiaries();
      this.checkMilestonePopup();
    } catch (error) {
      console.error("일지를 불러오는 데 실패했습니다:", error);
    }
  },
  watch: {
    diaryList(newList, oldList) {
      if (newList.length > oldList.length) {
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
        3: {
          title: "3회째 기록 달성",
          image: "public/cheericon/good_3.png",
          text: "스스로 건강을 챙기려는 노력이 이미 시작됐네요. 이렇게 기록하는 게 변화를 향한 중요한 첫걸음이에요!"
        },
        7: {
          title: "7회째 기록 달성",
          image: "/public/cheericon/good_7.png",
          text: "벌써 7번이나 기록했어요! 스스로 건강을 지키려는 마음이 꾸준히 이어지고 있다는 증거예요."
        },
        14: {
          title: "14회째 기록 달성",
          image: "/public/cheericon/good14.png",
          text: "14번째 기록까지 해내셨어요. 스스로 선택하고 실천한 결과가 이렇게 쌓여가고 있네요."
        },
        30: {
          title: "30회째 기록 달성",
          image: "/public/cheericon/good30.png",
          text: "30번째 기록을 달성했군요! 지금까지 보여준 꾸준함이 앞으로도 건강을 지켜주는 큰 힘이 될 거예요."
        }
      };

      if (messages[count]) {
        this.popupData = messages[count];
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
  gap: 12px;
  margin-top: 20px;
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

.entry-mood {
  font-weight: bold;
  font-size: clamp(16px, 4.5vw, 20px);
  color:#292929;
}

.entry-date{
  color:#9C9C9C;
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
  padding: 30px 50px;
  border-radius: 16px;
  z-index: 999;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0,0,0,0.25);
  max-width: 600px;
  width: 95%;
}

.popup-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.popup-title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #292929;
  text-align: center;
}

.popup-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-bottom: 16px;
}

.popup-text {
  font-size: 16px;
  line-height: 1.4;
  color: #555555;
  text-align: center;
  word-break: keep-all;
}
</style>

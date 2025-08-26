<template>
  <div class="diary-list-container">
    <BackButton :to="'/CardNewsMain'"/>
    <div class="top-bar">
      <h2>내가 쓴 일지</h2>
      <span class="sort-label">최신순</span>
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
  },
  methods: {
    viewDiary(entry) {
      this.$router.push({path: '/diarydetail', query: {id: entry.id}})
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

</style>

<template>
  <div class="diary-list-container">
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
        <span class="entry-date">날짜 {{ entry.date }}</span>
        <button class="view-button" @click="viewDiary(entry)">보기</button>
      </div>
    </div>
  </div>

  <NavigationBar />
</template>
<script>

import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: 'DiaryList',
  components: {NavigationBar},
  data() {
    return {
      diaryList: [],
    };
  },
  computed: {
    sortedDailyList() {
      return [...this.diaryList].sort((a, b) => new Date(b.date) - new Date(a.date));
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
}

.diary-button-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
.top-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom:25px;
}

.top-bar h2{
  font-size: 18px;
  margin:0;
}

.sort-label {
  font-size: 14px;
  color: #555;
}

.diary-button-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.diary-entry-box {
  border: 1.5px solid #222;
  border-radius: 6px;
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
  border: 1.5px solid #222;
  background-color: white;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
}

</style>

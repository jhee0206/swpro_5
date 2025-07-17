<template>
  <div class="diary-list-container">
    <h2>내가 쓴 일지</h2>
  </div>

  <div class="diary-button-list">
    <button
      v-for="(entry) in sortedDailyList"
      :key="entry.id"
      class="diary-button"
      @click="viewDiary(entry)">

      <img src="/diarimg.png" alt="diary icon" class="diary-icon" />
      <div class="entry-text">
      📔{{entry.date}} <br/> {{entry.title || '제목없음'}}
      </div>
    </button>
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
  text-align: center;
  padding: 30px 20px;
  font-family: 'Cafe24 Ssurround', serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.diary-button-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.diary-button {
  width: 130px;
  height: auto;
  border-radius: 12px;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.diary-icon{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

.entry-text {
  padding: 10px;
  text-align: center;
  font-size: 13px;
  width:100%;
  box-sizing: border-box;
  word-break: break-word;
}
</style>

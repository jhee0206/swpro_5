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
    // this.diaryList = stored ? JSON.parse(stored) : [];
    if (!stored) {
      this.diaryList = [
        {
          id: 1,
          date: '2025-07-10',
          title: '테스트 일기'
        },
        {
          id: 2,
          date: '2025-07-11',
          title: '테스트 일기2'
        },
        {
          id: 3,
          date: '2025-07-13',
          title: '테스트 일기3'
        },
        {
          id: 4,
          date: '2025-07-14',
          title: '테스트 일기4'
        },
        {
          id: 5,
          date: '2025-07-10',
          title: '테스트 일기5'
        },
        {
          id: 6,
          date: '2025-07-16',
          title: '테스트 일기6'
        },
        {
          id: 7,
          date: '2025-07-17',
          title: '테스트 일기7'
        }
      ];
    } else {
      this.diaryList = JSON.parse(stored);
    }
  },
  methods: {
    viewDiary(entry){
      console.log("일기 클릭", entry.id);
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

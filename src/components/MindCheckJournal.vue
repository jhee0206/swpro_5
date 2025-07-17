<template>
  <body>
  <div id="app">
    <h1>마음 체크 일지</h1>
    <div class="header-section" id="journal-content-to-capture">
      <p>
        <strong>제목</strong>
        <input type="text" id="entryTitle" v-model="entryTitle" />
      </p>
      <p>
        <strong>오늘의 기분</strong>
        <input type="text" id="entryMood" v-model="entryMood" />
      </p>
      <p>
        <strong>오늘의 문구</strong>
        <input type="text" id="entryPhrase" v-model="entryPhrase" />
      </p>
    </div>

    <div class="lifestyle-checklist">
      <h2 class="checklist-title">나의 라이프스타일 체크리스트</h2>

      <div class="checklist-item">
        <strong>오늘 수분 섭취량</strong>
        <div class="radio-group">
          <label><input type="radio" name="water" value="1cup" v-model="checklist.water" /> 1컵</label>
          <label><input type="radio" name="water" value="2_4cup" v-model="checklist.water" /> 2~4컵</label>
          <label><input type="radio" name="water" value="5_7cup" v-model="checklist.water" /> 5~7컵</label>
          <label><input type="radio" name="water" value="8_10cup" v-model="checklist.water" /> 8~10컵</label>
          <label><input type="radio" name="water" value="11cup" v-model="checklist.water" /> 11컵 이상</label>
        </div>
      </div>

      <div class="checklist-item">
        <strong>오늘 수면시간</strong>
        <div class="radio-group">
          <label><input type="radio" name="hour" value="4hour" v-model="checklist.hour" /> 4시간 이하</label>
          <label><input type="radio" name="hour" value="5_6hour" v-model="checklist.hour" /> 5~6시간</label>
          <label><input type="radio" name="hour" value="7_8hour" v-model="checklist.hour" /> 7~8시간</label>
          <label><input type="radio" name="hour" value="9_10hour" v-model="checklist.hour" /> 9~10시간</label>
          <label><input type="radio" name="hour" value="10hour" v-model="checklist.hour" /> 10시간 이상</label>
        </div>
      </div>

      <div class="checklist-item">
        <strong>규칙적인 식사</strong>
        <div class="radio-group">
          <label><input type="radio" name="meals" value="morning" v-model="checklist.meals" /> 아침</label>
          <label><input type="radio" name="meals" value="afternoon" v-model="checklist.meals" /> 점심</label>
          <label><input type="radio" name="meals" value="evening" v-model="checklist.meals" /> 저녁</label>
          <label><input type="radio" name="meals" value="noting" v-model="checklist.meals" /> 아무것도 먹지 않음</label>
        </div>
      </div>

      <div class="checklist-item">
        <strong>하루 중 취미 생활을 30분 이상 했는가?</strong>
        <div class="radio-group">
          <label><input type="radio" name="enjoyableActivity" value="yes" v-model="checklist.enjoyableActivity" /> 네</label>
          <label><input type="radio" name="enjoyableActivity" value="no" v-model="checklist.enjoyableActivity" /> 아니오</label>
        </div>
      </div>

      <div class="checklist-item">
        <strong>하루 중 운동을 30분 이상 했는가?</strong>
        <div class="radio-group">
          <label><input type="radio" name="socialInteraction" value="yes" v-model="checklist.socialInteraction" /> 네</label>
          <label><input type="radio" name="socialInteraction" value="no" v-model="checklist.socialInteraction" /> 아니오</label>
        </div>
      </div>
    </div>
    <div class="flex-center-x">
      <button class="button-item" @click="saveJournal">저장하기</button>
    </div>
  </div>
  </body>
  <NavigationBar />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import html2canvas from 'html2canvas'; // html2canvas 임포트

export default {
  name: 'MindCheckJournal',
  components: {NavigationBar},
  data() {
    return {
      entryDate: '',
      entryTitle: '',
      entryMood: '',
      entryPhrase: '',
      checklist: {
        water: '',
        hour: '',
        meals: '',
        enjoyableActivity: '',
        socialInteraction: '',
      },
      dailyRecord: '',
    };
  },
  mounted() {
    this.setCurrentDate();
  },
  methods: {
    setCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      this.entryDate = `${year}.${month}.${day}`;
    },
    async saveJournal() {
      const elementToCapture = document.getElementById('journal-content-to-capture');

      if (elementToCapture) {
        try {
          const canvas = await html2canvas(elementToCapture, {
            useCORS: true,
            height: elementToCapture.scrollHeight,
            windowHeight: elementToCapture.scrollHeight,
          });

          const imageDataURL = canvas.toDataURL('image/png');

          const newEntry = {
            id: Date.now(), // 고유 ID 생성
            date: this.entryDate,
            title: this.entryTitle,
            mood: this.entryMood,
            phrase: this.entryPhrase,
            checklist: this.checklist,
            image: imageDataURL,
          };

          const storedDiaryList = JSON.parse(localStorage.getItem('diaryList')) || [];
          storedDiaryList.push(newEntry);
          localStorage.setItem('diaryList', JSON.stringify(storedDiaryList));

          alert('일지 저장 완료!');
          this.$router.push('/DiarList');
        } catch (error) {
          console.error('이미지 캡처 및 저장 중 오류 발생:', error);
          alert('일지 저장 중 오류가 발생했습니다.');
        }
      } else {
        console.error('캡처할 요소를 찾을 수 없습니다.');
        alert('일지 내용을 캡처할 수 없습니다.');
      }
    },
  },
  watch: {
    entryTitle(newVal) {
      console.log('제목:', newVal);
    },
    entryMood(newVal) {
      console.log('기분:', newVal);
    },
    entryPhrase(newVal) {
      console.log('문구:', newVal);
    },
    dailyRecord(newVal) {
      console.log('일일 기록:', newVal);
    },
    checklist: {
      handler(newVal) {
        console.log('체크리스트:', newVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped src ="./Journal.css"></style>
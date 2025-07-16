<template>
  <body>
  <div id="app">
    <h1>마음 체크 일지</h1>
    <div class="header-section">
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
      <button class="button-item">저장하기</button>
    </div>
    </div>
  </body>
  <NavigationBar />
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: 'MindCheckJournal',
  components: {NavigationBar},
 // 컴포넌트 이름
  data() {
    return {
      // appData 객체를 Vue의 data 속성으로 변환
      entryDate: '',
      entryTitle: '',
      entryMood: '',
      entryPhrase: '',
      checklist: {
        water: '',
        hour: '', // water에서 hour로 수정되었습니다.
        meals: '', // exercise에서 meals로 수정되었습니다. (질문과 라디오 버튼 name을 맞춤)
        enjoyableActivity: '',
        socialInteraction: '',
        // newChallenge, rest는 기존 HTML에 없었으므로 제거
      },
      dailyRecord: '',
    };
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 후에 실행될 로직 (DOMContentLoaded와 유사)
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
  },
  watch: {
    // Vue의 watch를 사용하여 데이터 변경을 감지하고 콘솔에 출력
    // 모든 필드를 개별적으로 watch하거나, checklist와 같이 객체는 deep watch를 사용할 수 있습니다.
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
      deep: true, // checklist 객체 내부의 변경도 감지
    },
  },
};
</script>

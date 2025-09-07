<template>
  <div class="my-text">
  <div>
    <header class="header">
      <div class="header-content">
      <BackButton :to="'/CardNewsMain'"/>
      <p class="page-title">오늘의 일지</p>
      </div>
    </header>

    <div class="content"><!--캡쳐 시작지점-->
      <div class="intro-card">
        <p>
          <strong>나의 하루를 한 문장으로 표현해주세요.</strong>
        </p>
        <p>
             <textarea
                 id="entryMood"
                 v-model="entryMood"
                 maxlength="20"
                 rows="1"
                 ref="myAutoGrowTextarea"
                 @input="adjustTextareaHeight"
                 placeholder="오늘은 행복한 날이예요!"
                 class="textarea-style"
             ></textarea>
        </p>
      </div>
      <h2 class="h2-text">나의 라이프스타일 체크리스트</h2>
      <div>
        <div class="check-list">
          <strong>1. 오늘의 기분은? </strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="mood" value="best" v-model="checklist.mood" /> <span class="btn-text">매우 좋아요</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="mood" value="good" v-model="checklist.mood" /> <span class="btn-text">좋아요</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="mood" value="soso" v-model="checklist.mood" /> <span class="btn-text">그저 그래요</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="mood" value="bad" v-model="checklist.mood" /> <span class="btn-text">나빠요</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="mood" value="vlevle" v-model="checklist.mood" /> <span class="btn-text">매우 나빠요</span> </label>
          </div>
        </div>

        <div class="check-list">
          <strong>2. 오늘 수분 섭취량</strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="water" value="1cup" v-model="checklist.water" /> <span class="btn-text">1컵 </span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="water" value="2\_4cup" v-model="checklist.water" /> <span class="btn-text">2~4컵 </span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="water" value="5\_7cup" v-model="checklist.water" /> <span class="btn-text">5~7컵 </span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="water" value="8\_10cup" v-model="checklist.water" /> <span class="btn-text">8~10컵 </span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="water" value="11cup" v-model="checklist.water" /> <span class="btn-text">11컵 이상 </span></label>
          </div>
        </div>

        <div class="check-list">
          <strong>3. 오늘 수면시간</strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="hour" value="4hour" v-model="checklist.hour" /> <span class="btn-text">4시간 이하</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="hour" value="5\_6hour" v-model="checklist.hour" /> <span class="btn-text">5~6시간</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="hour" value="7\_8hour" v-model="checklist.hour" /> <span class="btn-text">7~8시간</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="hour" value="9\_10hour" v-model="checklist.hour" /> <span class="btn-text">9~10시간</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="hour" value="10hour" v-model="checklist.hour" /> <span class="btn-text">10시간 이상</span> </label>
          </div>
        </div>

        <div class="check-list">
          <strong>4. 규칙적인 식사 (중복 선택 가능)</strong>
          <div class="rating-container">
            <label class="custom-checkbox-btn"><input type="checkbox" value="morning" v-model="checklist.meals" /> <span class="btn-text">아침</span> </label>
            <label class="custom-checkbox-btn"><input type="checkbox" value="afternoon" v-model="checklist.meals" /> <span class="btn-text">점심</span> </label>
            <label class="custom-checkbox-btn"><input type="checkbox" value="evening" v-model="checklist.meals" /> <span class="btn-text">저녁</span> </label>
            <label class="custom-checkbox-btn"><input type="checkbox" value="nothing" v-model="checklist.meals" /> <span class="btn-text">아무것도 먹지 않음</span> </label>
          </div>
        </div>

        <div class="check-list">
          <strong>5. 하루 중 취미 생활을 30분 이상 했는가?</strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="enjoyableActivity" value="yes" v-model="checklist.enjoyableActivity" /> <span class="btn-text">그렇다</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="enjoyableActivity" value="no" v-model="checklist.enjoyableActivity" /> <span class="btn-text">아니다</span> </label>
          </div>
        </div>

        <div class="check-list">
          <strong>6. 하루 중 운동을 30분 이상 했나요?</strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="exercise" value="yes" v-model="checklist.exercise" /> <span class="btn-text">그렇다</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="exercise" value="no" v-model="checklist.exercise" /> <span class="btn-text">아니다</span> </label>
          </div>
        </div>

        <div class="check-list">
          <strong>7. 하루 중 누군가와 마음을 나눈 경험이 있나요?</strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="heartSharing" value="yes" v-model="checklist.heartSharing" /> <span class="btn-text">그렇다</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="heartSharing" value="no" v-model="checklist.heartSharing" /> <span class="btn-text">아니다</span> </label>
          </div>
        </div>

        <div class="check-list">
          <strong>8. 하루 중 친절을 베푼 경험이 있나요?</strong>
          <div class="rating-container">
            <label class="rating-option custom-radio"><input type="radio" name="kindness" value="yes" v-model="checklist.kindness" /> <span class="btn-text">그렇다</span> </label>
            <label class="rating-option custom-radio"><input type="radio" name="kindness" value="no" v-model="checklist.kindness" /> <span class="btn-text">아니다</span> </label>
          </div>
        </div>
      </div>
    </div>


    <NavigationBar />
  </div>
  </div>
</template>


<script>
import NavigationBar from "@/components/NavigationBar.vue";
import html2canvas from "html2canvas";
import BackButton from "@/components/BackButton.vue";

export default {
  name: "MindCheckJournal",
  components: {BackButton, NavigationBar },
  data() {
    return {
      entryDate: "",
      entryTitle: "",
      entryMood: "",
      entryPhrase: "",
      checklist: {
        mood: "",
        water: "",
        hour: "",
        meals: [], // checkbox용 배열로 변경
        enjoyableActivity: "",
        exercise: "", // socialInteraction → exercise 로 구분
        heartSharing: "",
        kindness: "",
      },
      dailyRecord: "",
    };
  },
  mounted() {
    this.setCurrentDate();
  },
  methods: {
    setCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      this.entryDate = `${year}.${month}.${day}`;
    },
    adjustTextareaHeight() {
      this.$nextTick(() => { // DOM 업데이트 후에 실행되도록 보장
        const textarea = this.$refs.myAutoGrowTextarea; // ref로 요소 접근
        if (textarea) {
          textarea.style.height = 'auto'; // 높이 초기화
          textarea.style.height = (textarea.scrollHeight) + 'px'; // 스크롤 가능한 높이만큼 설정
        }
      });
    },
    saveJournal: async function () {
      const waterBad = ["1cup", "2_4cup", "11cup"];
      const hourBad = ["4hour", "5_6hour", "10hour"];
      const exerciseBad = ["no"];

      const elementToCapture = document.getElementById("journal-content-to-capture");
      //this.entryDate = "2025.09.23";
      if (elementToCapture) {
        setTimeout(async () => {
          try {
            const captureHeight = elementToCapture.scrollHeight + 50;

            const canvas = await html2canvas(elementToCapture, {
              useCORS: true,
              scrollY: -window.scrollY,
              height: captureHeight,
              windowHeight: captureHeight,
            });

            const imageDataURL = canvas.toDataURL("image/png");

            const newEntry = {
              id: Date.now(),
              date: this.entryDate,
              title: this.entryTitle,
              mood: this.entryMood,
              phrase: this.entryPhrase,
              checklist: this.checklist,
              image: imageDataURL,
            };

            const storedDiaryList = JSON.parse(localStorage.getItem("diaryList")) || [];
            storedDiaryList.push(newEntry);
            localStorage.setItem("diaryList", JSON.stringify(storedDiaryList));

            alert("일지 저장 완료!");
            if (
                waterBad.includes(this.checklist.water) ||
                hourBad.includes(this.checklist.hour) ||
                exerciseBad.includes(this.checklist.exercise)
            ) {
              this.$router.push("/Cheerup");
            } else {
              this.$router.push("/DiarList");
            }
          } catch (error) {
            console.error("이미지 캡처 및 저장 중 오류 발생:", error);
            alert("일지 저장 중 오류가 발생했습니다.");
          }
        }, 500);
      } else {
        console.error("캡처할 요소를 찾을 수 없습니다.");
        alert("일지 내용을 캡처할 수 없습니다.");
      }
    },
  },
};
</script>

<style scoped src="./Journal.css"></style>

<template>
  <div id="app">
    <div id="journal-content-to-capture">
      <h1>하루톡</h1>

      <div class="header-section" style="text-align: center;">
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
              style="width: 100%; resize: vertical; white-space: pre-wrap; word-wrap: break-word;"
              placeholder="오늘은 행복한 날이예요!"
          ></textarea>
        </p>
      </div>

      <div class="lifestyle-checklist">
        <h2 class="checklist-title">나의 라이프스타일 체크리스트</h2>

        <div class="flex-container">
        <div class="checklist-item">
          <strong>1. 오늘의 기분</strong>
          <div class="radio-group">
            <label><input type="radio" name="water" value="best" v-model="checklist.water" /> 아주 좋아요</label>
            <label><input type="radio" name="water" value="good" v-model="checklist.water" /> 좋아요</label>
            <label><input type="radio" name="water" value="soso" v-model="checklist.water" /> 그저그래요</label>
            <label><input type="radio" name="water" value="bad" v-model="checklist.water" /> 나빠요</label>
            <label><input type="radio" name="water" value="vlevle" v-model="checklist.water" /> 매우 나빠요</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>2. 오늘 수분 섭취량</strong>
          <div class="radio-group">
            <label><input type="radio" name="water" value="1cup" v-model="checklist.water" /><span class="radio-circle"></span> 1컵</label>
            <label><input type="radio" name="water" value="2_4cup" v-model="checklist.water" /><span class="radio-circle"></span> 2~4컵</label>
            <label><input type="radio" name="water" value="5_7cup" v-model="checklist.water" /><span class="radio-circle"></span> 5~7컵</label>
            <label><input type="radio" name="water" value="8_10cup" v-model="checklist.water" /><span class="radio-circle"></span> 8~10컵</label>
            <label><input type="radio" name="water" value="11cup" v-model="checklist.water" /><span class="radio-circle"></span> 11컵 이상</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>3. 오늘 수면시간</strong>
          <div class="radio-group">
            <label><input type="radio" name="hour" value="4hour" v-model="checklist.hour" /><span class="radio-circle"></span> 4시간 이하</label>
            <label><input type="radio" name="hour" value="5_6hour" v-model="checklist.hour" /><span class="radio-circle"></span> 5~6시간</label>
            <label><input type="radio" name="hour" value="7_8hour" v-model="checklist.hour" /><span class="radio-circle"></span> 7~8시간</label>
            <label><input type="radio" name="hour" value="9_10hour" v-model="checklist.hour" /><span class="radio-circle"></span> 9~10시간</label>
            <label><input type="radio" name="hour" value="10hour" v-model="checklist.hour" /><span class="radio-circle"></span> 10시간 이상</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>4. 규칙적인 식사 (중복 선택 가능)</strong>
          <div class="checkbox-group">
            <label><input type="checkbox" value="morning" v-model="checklist.meals" /><span class="checkbox-box"></span> 아침</label>
            <label><input type="checkbox" value="afternoon" v-model="checklist.meals" /><span class="checkbox-box"></span> 점심</label>
            <label><input type="checkbox" value="evening" v-model="checklist.meals" /><span class="checkbox-box"></span> 저녁</label>
            <label><input type="checkbox" value="nothing" v-model="checklist.meals" /><span class="checkbox-box"></span> 아무것도 먹지 않음</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>5. 하루 중 취미 생활을 30분 이상 했는가?</strong>
          <div class="radio-group">
            <label><input type="radio" name="enjoyableActivity" value="yes" v-model="checklist.enjoyableActivity" /><span class="radio-circle"></span> 그렇다</label>
            <label><input type="radio" name="enjoyableActivity" value="no" v-model="checklist.enjoyableActivity" /><span class="radio-circle"></span> 아니다</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>6. 하루 중 운동을 30분 이상 했나요?</strong>
          <div class="radio-group">
            <label><input type="radio" name="exercise" value="yes" v-model="checklist.exercise" /><span class="radio-circle"></span> 그렇다</label>
            <label><input type="radio" name="exercise" value="no" v-model="checklist.exercise" /><span class="radio-circle"></span> 아니다</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>7. 하루 중 누군가와 마음을 나눈 경험이 있나요?</strong>
          <div class="radio-group">
            <label><input type="radio" name="heartSharing" value="yes" v-model="checklist.heartSharing" /><span class="radio-circle"></span> 그렇다</label>
            <label><input type="radio" name="heartSharing" value="no" v-model="checklist.heartSharing" /><span class="radio-circle"></span> 아니다</label>
          </div>
        </div>

        <div class="checklist-item">
          <strong>8. 하루 중 친절을 베푼 경험이 있나요?</strong>
          <div class="radio-group">
            <label><input type="radio" name="kindness" value="yes" v-model="checklist.kindness" /><span class="radio-circle"></span> 그렇다</label>
            <label><input type="radio" name="kindness" value="no" v-model="checklist.kindness" /><span class="radio-circle"></span> 아니다</label>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="flex-center-x" style="margin-top: 1rem;">
      <button class="button-item" @click="saveJournal">저장하기</button>
    </div>

    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import html2canvas from "html2canvas";

export default {
  name: "MindCheckJournal",
  components: { NavigationBar },
  data() {
    return {
      entryDate: "",
      entryTitle: "",
      entryMood: "",
      entryPhrase: "",
      checklist: {
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
      const elementToCapture = document.getElementById("journal-content-to-capture");

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
            this.$router.push("/DiarList");
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

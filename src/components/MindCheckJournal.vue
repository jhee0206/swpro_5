<template>
  <div class="my-text">
    <div>
      <header class="header">
        <div class="top-section">
          <BackButton :to="'/CardNewsMain'"/>
        </div>
        <div class="title-section">
          <p class="page-title">오늘의 일지</p>
        </div>
      </header>

      <div class="content" id="journal-content-to-capture" ref="scrollableContent">
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

      <div class="button-container">
        <GoToSurveyButton
            nextLink="저장하기"
            @next="saveJournal"/>
      </div>


      <NavigationBar />
    </div>
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import BackButton from "@/components/BackButton.vue";
import GoToSurveyButton from "@/component/GoToSurveyButton.vue";
import { addDiary } from "@/db.js";
import * as htmlToImage from "html-to-image";

// ✨ 폰트 CSS를 가져오는 헬퍼 함수
async function getFontEmbedCSS() {
  const fontFamilies = ["Pretendard"]; // 사용하는 폰트 패밀리 이름
  const styleSheets = Array.from(document.styleSheets).filter(sheet =>
      !sheet.href || sheet.href.startsWith(window.location.origin)
  );

  let cssString = '';
  for (const sheet of styleSheets) {
    try {
      const rules = sheet.cssRules ? Array.from(sheet.cssRules) : [];
      for (const rule of rules) {
        if (rule.type === CSSRule.FONT_FACE_RULE) {
          const fontFamily = rule.style.getPropertyValue('font-family').replace(/['"]/g, '');
          if (fontFamilies.includes(fontFamily)) {
            cssString += rule.cssText;
          }
        }
      }
    } catch (e) {
      console.warn("Can't read the css rules of: ", sheet.href, e);
    }
  }

  // CDN 폰트 CSS를 직접 가져오기
  const cdnUrl = 'https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard.css';
  try {
    const response = await fetch(cdnUrl);
    if (response.ok) {
      const cdnCssText = await response.text();
      cssString += cdnCssText;
    }
  } catch(e) {
    console.error("Failed to fetch CDN font CSS:", e);
  }

  return cssString;
}


export default {
  name: "MindCheckJournal",
  components: { GoToSurveyButton, BackButton, NavigationBar },
  data() {
    return {
      entryDate: "",
      entryMood: "",
      checklist: {
        mood: "",
        water: "",
        hour: "",
        meals: [],
        enjoyableActivity: "",
        exercise: "",
        heartSharing: "",
        kindness: "",
      },
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
      this.$nextTick(() => {
        const textarea = this.$refs.myAutoGrowTextarea;
        if (textarea) {
          textarea.style.height = 'auto';
          textarea.style.height = (textarea.scrollHeight) + 'px';
        }
      });
    },
    // ✨ saveJournal 함수 수정
    async saveJournal() {
      const waterBad = ["1cup", "2_4cup", "11cup"];
      const hourBad = ["4hour", "5_6hour", "10hour"];
      const exerciseBad = ["no"];

      const elementToCapture = this.$refs.scrollableContent;
      if (!elementToCapture) {
        console.error("캡처할 요소를 찾을 수 없습니다.");
        alert("일지 내용을 캡처할 수 없습니다.");
        return;
      }

      try {
        // 1. 폰트 CSS 가져오기
        const fontEmbedCSS = await getFontEmbedCSS();

        // 2. 이미지 생성 시 fontEmbedCSS 옵션 추가
        const dataUrl = await htmlToImage.toPng(elementToCapture, {
          backgroundColor: "#ffffff",
          pixelRatio: 2,
          fontEmbedCSS: fontEmbedCSS, // 폰트 임베딩 옵션
        });

        // 3. DB 저장 로직 유지
        const newEntry = {
          id: Date.now(),
          date: this.entryDate,
          mood: this.entryMood,
          checklist: JSON.parse(JSON.stringify(this.checklist)),
          image: dataUrl,
        };

        await addDiary(newEntry);

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
        console.error("이미지 캡처 및 IndexedDB 저장 중 오류 발생:", error);
        alert("일지 저장 중 오류가 발생했습니다.");
      }
    },
  },
};
</script>
<style scoped src="./Journal.css"></style>

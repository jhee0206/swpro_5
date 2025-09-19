<template>
  <div class="my-record-container">
    <header class="header">
      <div class="top-section">
        <BackButton :to="'/CardNewsMain'"/>
      </div>

      <div class="title-section">
        <h1 class="page-title"> 하루톡 </h1>
      </div>
    </header>

    <div class="content">
      <div class="intro-card">
        <p>
          물질 중독 재활은 중독으로부터 회복하여 건강하고 생산적인 삶을 되찾도록 돕는 데 매우 중요합니다.
        </p>
        <p>
          재활은 재발을 방지하기 위한 교육, 상담, 치료 등 다양한 프로그램을 포함하며, 국가 차원의 노력뿐만 아니라 개인의 의지,
          전문적인 치료, 그리고 사회적 지지가 함께할 때 그 효과가 극대화됩니다.
        </p>
      </div>

      <p>
        <strong>하루톡</strong>은 이런 회복의 여정 속에서 오늘의 나를 기록 하고 점검할 수 있는 공간입니다.<br><br>

        <u><strong>‘마음 체크 일지’</strong></u>에는 하루의 라이프스타일을 돌아볼 수 있는
        <strong>‘라이프스타일 체크리스트’</strong>가 포함되어 있어, 신체적·정신적·사회적 건강을 균형 있게 돌볼 수 있도록 돕습니다.
        <strong>'마음 체크 일지'</strong>를 통해 하루의 행동을 돌아보고, 나 자신에 대한 작은 기록을 남겨보세요!</p>

      <!--그람자 선 추가-->
      <div class="section-divider"></div>

      <div class="check-info">
        <p><strong>하루를 지키는 건강 체크 </strong><br></p>
        *오늘의 나를 위한 간단한 체크리스트!*
        </div>

      <div
        class="collapsible-box"
        :class="{ 'is-active': activeContent ==='content1'}"
        @click="toggleContent('content1')">
        <img src="/haruincon/water.svg" alt="물" class="box-icon" />
      <span class="box-title">1. 성인 하루 권장 물 섭취량은?</span>
        <span class="box-arrow" :class="{ 'rotate': activeContent === 'content1' }">▼</span>
        </div>
      <div class="collapsible-content" :class="{ 'is-active': activeContent === 'content1' }">
        <p><strong>한국영양학회</strong>에서 제시하는 1일 수분 섭취 기준은 아래와 같으며,
          연령대와 성별에 따라 권장량이 다릅니다.</p>

        <table class="water-intake-table">
          <tbody>
          <tr>
            <td class="gender">남성:</td>
            <td class="age">19~29세</td>
            <td class="amount">2,600mL</td>
          </tr>
          <tr>
            <td></td>
            <td class="age">30~49세</td>
            <td class="amount">2,500mL</td>
          </tr>
          <tr>
            <td></td>
            <td class="age">50~64세</td>
            <td class="amount">2,200mL</td>
          </tr>
          <tr class="group-separator">
            <td colspan="3"></td>
          </tr>
          <tr>
            <td class="gender">여성:</td>
            <td class="age">19~29세</td>
            <td class="amount">2,100mL</td>
          </tr>
          <tr>
            <td></td>
            <td class="age">30~49세</td>
            <td class="amount">2,000mL</td>
          </tr>
          <tr>
            <td></td>
            <td class="age">50~64세</td>
            <td class="amount">1,900mL</td>
          </tr>
          </tbody>
        </table>

        <p>
          <strong>수분 부족</strong>은 탈수, 변비, 피로 등 다양한 문제를 유발할 수 있으며,<br>
          <strong>수분 과다 섭취</strong> 또한 신체에 부담을 줄 수 있으므로 적절한 양을 섭취하는 것이 중요합니다.<br><br>

          음식물에도 수분이 포함되어 있으므로, 물 외에도 음료, 과일, 채소 등을 통해 섭취하는 수분도 고려해야 합니다.
          또한 수분 섭취 기준은 개인의 활동량, 기온, 건강 상태 등에 따라 달라질 수 있습니다. </p>
      </div>

      <div
          class="collapsible-box"
          :class="{ 'is-active': activeContent ==='content2'}"
          @click="toggleContent('content2')">
        <img src="/haruincon/sleep.svg" alt="수면" class="box-icon" />
      <span class="box-title">2. 하루 적정 수면시간은?</span>
        <span class="box-arrow" :class="{ 'rotate': activeContent === 'content2' }">▼</span>
      </div>
      <div class="collapsible-content" :class="{ 'is-active': activeContent === 'content2' }">
        <p><strong>대한수면학회</strong>에 따르면, 일반적으로 일상 생활을 잘 유지하기 위하여
          <strong>하루 6~8시간 정도의 수면을 취하는 것이 좋다</strong>고 합니다.
          이보다 수면이 부족하게 되면 피로가 쏟아 지면서 집중력이 떨어지고 운동 능력이 저하되기도 합니다.<br><br>

          또한, 수면시간을 줄일수록 비만이 생길 위험이 높아진다는 연구도 있습니다. 반대로 적당한 수면 시간보다 더 많은
          시간 동안 수면을 취한다고 하더라도 그 이상의 효과를 얻지는 못하는 것으로 알려져 있습니다.</p>
      </div>

      <div
          class="collapsible-box"
          :class="{ 'is-active': activeContent ==='content3'}"
          @click="toggleContent('content3')">
        <img src="/haruincon/work.svg" alt="운동" class="box-icon" />
      <span class="box-title">3. 하루 적정 운동시간은?</span>
        <span class="box-arrow" :class="{ 'rotate': activeContent === 'content3' }">▼</span>
      </div>
      <div class="collapsible-content" :class="{ 'is-active': activeContent === 'content3' }">
        <p><strong>미국 심장학회(AHA)</strong>는 건강 증진을 위해 성인 기준 <strong>하루 30분 이상의
          중등도 운동</strong>, 또는 주당 150분 이상의 중등도 운동, 또는 주당 75분 이상의 격렬한 운동을 권장합니다.<br><br>

          중등도 운동은 숨이 약간 차오르고 땀이 날 정도의 운동으로, 걷기, 자전거 타기, 수영 등이 포함됩니다. 이보다 더 센
          고강도의 격한 운동은 숨이 많이 차고 땀이 많이 나는 운동으로, 조깅, 달리기 등이 포함됩니다.<br><br>

          다만 더 건강해지거나 만성질환 및 체중 증가를 예방하려면 최소 권고 사항 이상의 운동을 하는 것이 좋습니다.
          또한 운동시간 30분은 보통 성인들이 건강을 유지하고 만성질환의 위험도를 낮추는 정도를 말합니다.</p>
      </div>
    </div>

    <div class="floating-button" @click="handleClickButton">
      <img src="/haruincon/flo.svg" alt="Flo Icon" class="floating-icon" />
    </div>

    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import BackButton from "@/components/BackButton.vue";

export default {
  name: "MyRecord",
  computed: {
    content() {
      return content
    }
  },
  components: {BackButton, NavigationBar },
  setup() {
    const router = useRouter();
    const activeContent = ref(null); // 현재 활성화된 콘텐츠의 ID를 저장합니다.

    const goToCardNewsMain = () => {
      router.push({ name: 'CardNewsMain' });
    };

    const handleClickButton = () => {
      router.push({ name: 'JournalImage' });
    };

    // 콘텐츠를 토글하는 새로운 함수
    const toggleContent = (contentId) => {
      if (activeContent.value === contentId) {
        activeContent.value = null; // 이미 열려 있으면 닫습니다.
      } else {
        activeContent.value = contentId; // 닫혀 있으면 엽니다.
      }
    };

    return {
      goToCardNewsMain,
      handleClickButton,
      toggleContent,
      activeContent,
    };
  }
}
</script>

<style scoped>
/* 기본 CSS 재설정 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 전체 페이지 컨테이너 */
.my-record-container {
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

.intro-card {
  background:#f0f0f0;
  border-radius: 10px;
  padding: 5px 15px;
  border:1px solid #e5e5e5;
  margin-bottom: 20px;
  color: #555555;
  font-size: 14px;
}

.intro-card p {
  margin: 6px 0;   /* 위아래 여백 최소화 */
  line-height: 1.6;
}
.check-info{
  margin-top: 20px;
}

.check-info p {
  line-height: 1.6; /* 필요하면 줄 간격도 조절 */
  color: #444;       /* 기존과 동일하게 색상 유지 */
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

/* 상단 구역 (뒤로가기 버튼) */
.top-section {
  width: 100%;
  padding: 15px 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}


/* 제목 구역 (나의 기록) */
.title-section {
  width: 100%;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
}

.collapsible-box{
  display: flex;
  align-items: center;
  border:1px solid #555555;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 12px 0;
}

.collapsible-content{
  display: flex;
  align-items: center;
  border:1px solid #555555;
  border-radius: 10px;
  padding: 12px 16px;
  margin: 12px 0;
}

.collapsible-box.is-active {
  border-color: #23ADB4;
}

.box-icon{
  width: 36px;
  height: 36px;
  margin-right: 10px;
}

.box-title{
  flex: 1;
  font-weight: bold;
  font-size: 18px;
  color: #333;
}
.page-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

/* 내용 부분 - 스크롤이 발생하는 핵심 영역 */
.content {
  padding: 12px;
  flex-grow: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  font-size: 14px;
}

/* 본문 단락 스타일 (p 태그) */
.content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
  word-break: break-all;
  text-align: justify;
}

/* 강조 텍스트 */
.content strong {
  font-weight: bold;
  color: #333;
}

.content u {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.section-divider {
  border-bottom: 5px solid rgba(127, 135, 156, 0.31);
  width: 100%;
  margin: 20px 0;  /* 위아래 여백 */
  position: relative;  /* 레이아웃 흔들림 방지 */
  flex-shrink: 0;
}



/* div (물 섭취량 데이터) */
.collapsible-content div {
  background-color: #FFF;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
  color: #333;
  font-size: 15px;
  line-height: 1.4;
  text-align: left;
  white-space: pre-line;
}

.collapsible-content p {
  margin: 0;
  text-align: left;
}

.floating-button {
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 73px;
  height: 73px;
  border-radius: 30px;
  background: linear-gradient(135deg, #2DE6B3, #3EC0C6); /* 레이어드 그라데이션 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.3);
}

.floating-icon {
  width: 40px;   /* 버튼 안 아이콘 크기 */
  height: 40px;
}

/* 접었다 펴기 기능 관련 CSS */
.collapsible-content {
  display: none; /* 기본적으로 숨겨져 있음 */
}

.collapsible-content.is-active {
  display: block; /* 'is-active' 클래스가 추가되면 보이도록 함 */
}

.water-intake-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #FFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  font-size: 15px;
  margin: 20px 0;
  padding: 10px;
}

.water-intake-table td {
  padding: 5px;
  line-height: 1.5;
}

.water-intake-table .gender {
  width: 60px; /* '남성:', '여성:' 텍스트 너비 고정 */
  font-weight: bold;
  vertical-align: top;
}

.water-intake-table .age {
  width: 90px; /* '00~00세' 텍스트 너비 고정 */
  vertical-align: top;
}

.water-intake-table .amount {
  font-weight: 500;
  vertical-align: top;
}

/* 남성/여성 그룹 사이에 간격을 주기 위한 스타일 */
.water-intake-table .group-separator td {
  padding: 4px 0; /* 위아래로 약간의 여백만 줌 */
}
</style>

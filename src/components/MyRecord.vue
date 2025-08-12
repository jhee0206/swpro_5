<template>
  <div class="my-record-container">
    <header class="header">
      <div class="top-section">
        <div class="back-button" @click="goToCardNewsMain">
          <span class="arrow">&larr;</span>
        </div>
      </div>

      <div class="title-section">
        <h1 class="page-title"> 하루톡 </h1>
      </div>
    </header>

    <div class="content">
      <p>물질 중독 재활은 중독으로부터 회복하여 건강하고 생산적인 삶을 되찾도록 돕는 데 매우 중요합니다.<br>
        재활은 재발을 방지하기 위한 교육, 상담, 치료 등 다양한 프로그램을 포함하며, 국가 차원의 노력뿐만 아니라 개인의 의지,
        전문적인 치료, 그리고 사회적 지지가 함께할 때 그 효과가 극대화됩니다.<br><br>
        개인이 예방할 수 있는 다양한 방법들 중, 이곳에서는 오늘의 나를 기록하고 점검해보며 전인적인 건강을
        관리할 수 있도록 돕습니다. 오늘 하루 동안의 행동을 체크해보고, 나 자신에 대한 기록을 써내려가며 회복의
        시간을 가져보는 것은 어떨까요?<br><br>

        <u><strong>‘하루톡’</strong></u>에는 오늘 하루 나의 라이프스타일을 점검해볼 수 있는
        체크리스트가 포함되어 있습니다.<br>

        중독을 극복하고 건강한 삶을 회복하기 위한 <strong>‘라이프 스타일 체크리스트’</strong>는 신체적,
        정신적, 사회적 건강을 균형 있게 돌볼 수 있도록 합니다.</p>

      <h3>1. 성인 하루 권장 물 섭취량을 알아볼까요?</h3>

      <p><strong>한국영양학회</strong>에서 제시하는 1일 수분 섭취 기준은 아래와 같으며,
        연령대와 성별에 따라 권장량이 다릅니다.</p>

      <div>
        남성: 19~29세 2,600mL, 30~49세 2,500mL, 50~64세 2,200mL
        여성: 19~29세 2,100mL, 30~49세 2,000mL, 50~64세 1,900mL
      </div>

      <p>
        <strong>수분 부족</strong>은 탈수, 변비, 피로 등 다양한 문제를 유발할 수 있으며,<br>
        <strong>수분 과다 섭취</strong> 또한 신체에 부담을 줄 수 있으므로 적절한 양을 섭취하는 것이 중요합니다.<br><br>

        음식물에도 수분이 포함되어 있으므로, 물 외에도 음료, 과일, 채소 등을 통해 섭취하는 수분도 고려해야 합니다.
        또한 수분 섭취 기준은 개인의 활동량, 기온, 건강 상태 등에 따라 달라질 수 있습니다. </p>

      <h3>2. 하루 적정 수면시간에 대해 알아볼까요?</h3>

      <p><strong>대한수면학회</strong>에 따르면, 일반적으로 일상 생활을 잘 유지하기 위하여
        <strong>하루 6~8시간 정도의 수면을 취하는 것이 좋다</strong>고 합니다.
        이보다 수면이 부족하게 되면 피로가 쏟아 지면서 집중력이 떨어지고 운동 능력이 저하되기도 합니다.<br><br>

        또한, 수면시간을 줄일수록 비만이 생길 위험이 높아진다는 연구도 있습니다. 반대로 적당한 수면 시간보다 더 많은
        시간 동안 수면을 취한다고 하더라도 그 이상의 효과를 얻지는 못하는 것으로 알려져 있습니다.</p>

      <h3>3. 하루 적정 운동시간에 대해 알아볼까요?</h3>

      <p><strong>미국 심장학회(AHA)</strong>는 건강 증진을 위해 성인 기준 <strong>하루 30분 이상의
        중등도 운동</strong>, 또는 주당 150분 이상의 중등도 운동, 또는 주당 75분 이상의 격렬한 운동을 권장합니다.<br><br>

        중등도 운동은 숨이 약간 차오르고 땀이 날 정도의 운동으로, 걷기, 자전거 타기, 수영 등이 포함됩니다. 이보다 더 센
        고강도의 격한 운동은 숨이 많이 차고 땀이 많이 나는 운동으로, 조깅, 달리기 등이 포함됩니다.<br><br>

        다만 더 건강해지거나 만성질환 및 체중 증가를 예방하려면 최소 권고 사항 이상의 운동을 하는 것이 좋습니다.
        또한 운동시간 30분은 보통 성인들이 건강을 유지하고 만성질환의 위험도를 낮추는 정도를 말합니다.</p>
    </div>

    <div class="fixed-bottom-button-area">
      <button class="action-button" @click="handleClickButton">하루톡 &rarr;</button>
    </div>

    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import { useRouter } from 'vue-router';

export default {
  name: "MyRecord",
  components: { NavigationBar },
  setup() {
    const router = useRouter();

    const goToCardNewsMain = () => {
      router.push({ name: 'CardNewsMain' });
    };

    // 새로운 버튼 클릭 핸들러
    const handleClickButton = () => {
      router.push({ name: 'JournalImage' });
    };

    return {
      goToCardNewsMain,
      handleClickButton // 템플릿에서 사용할 함수 노출
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
  /* 내비게이션 바 높이(65px) + 고정 버튼 영역 높이(예: 70px) = 총 패딩 */
  padding-bottom: calc(65px + 70px); /* 내비게이션 바와 고정 버튼 공간 확보 */
}

/* 헤더 - flex-direction: column으로 내부 구역들을 세로로 정렬 */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 10;
  padding-bottom: 20px;
}

/* 상단 구역 (뒤로가기 버튼) */
.top-section {
  width: 100%;
  padding: 15px 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.back-button {
  font-size: 28px;
  cursor: pointer;
  color: #333;
  padding: 5px;
}

/* 제목 구역 (나의 기록) */
.title-section {
  width: 100%;
  text-align: center;
  padding-top: 20px;
}

.page-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

/* 내용 부분 - 스크롤이 발생하는 핵심 영역 */
.content {
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  /* 콘텐츠의 하단이 고정 버튼 영역에 가려지지 않도록 패딩 추가 */
  padding-bottom: 20px; /* 기존 콘텐츠 하단 패딩 유지. 필요 시 더 추가 */
}

/* 본문 단락 스타일 (p 태그) */
.content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
  word-break: keep-all;
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

/* h3 태그 스타일 (1., 2., 3. 등) */
.content h3 {
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 15px;
  text-align: left;
}

/* div (물 섭취량 데이터) */
.content div:not(.back-button) {
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

.content div:not(.back-button) p {
  margin: 0;
  text-align: left;
}

/* 새롭게 추가된 고정 버튼 영역 스타일 */
.fixed-bottom-button-area {
  position: fixed; /* 화면에 고정 */
  bottom: 65px;    /* 내비게이션 바 (65px) 바로 위에 위치 */
  left: 0;
  right: 0;
  max-width: 450px; /* my-record-container와 동일한 최대 너비 */
  padding: 10px 20px; /* 상하좌우 패딩 */
  display: flex; /* 버튼 중앙 정렬을 위해 flex 사용 */
  justify-content: flex-end;
  align-items: center; /* 세로 중앙 정렬 */
  z-index: 9; /* 내비게이션 바보다 아래, 콘텐츠보다는 위에 있도록 */
  height: 70px; /* 이 영역의 높이 (버튼 크기 포함하여 조절) */
}

.action-button {
  width: 50%; /* 부모 영역에 꽉 차도록 */
  max-width: 300px; /* 버튼의 최대 너비 */
  padding: 15px 0;
  background-color: #2260FF; /* 버튼 색상 */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}

</style>

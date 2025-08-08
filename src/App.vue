<script>
export default {
  data() {
    return {
      score : true,
      subscribe : 2677,
    }
  },
};
</script>

<template>
  <div>

    <main>
      <router-view/> <!-- 실제 메인화면(SurveyMain.vue)이 여기에 표시됨 -->
    </main>

  </div>
</template>


<style scoped>

</style>

<style>

.app-link {
  color: #C86A89;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;

  /* 부드러운 효과를 위한 transition 추가 */
  transition: opacity 0.15s ease-in-out;
}

.app-link:hover {
  color: #C13B6B;
}

/* 터치했을 때의 효과 */
.app-link:active {
  opacity: 0.7;
}

/* ---  웹사이트/전화번호 링크 --- */
.info-link {
  color: #C86A89;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer; /* 데스크톱 환경을 위해 추가 */

  /* 부드러운 터치 효과를 위한 transition */
  transition: all 0.15s ease-in-out;
}

/* 데스크톱에서 마우스를 올렸을 때 */
.info-link:hover {
  color: #C13B6B;
}

/* 앱에서 터치하고 있는 동안 */
.info-link:active {
  opacity: 0.6;
  background-color: #f0f0f0;
  border-radius: 4px;
}
</style>
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
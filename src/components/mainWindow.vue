<template>
  <div class="container">
    <div class="content">
      <!--<img src="/logo.png" alt="로고" class="logo_v.svg" />-->
      <h1 class="title">
        Addiction - ZERO<br/><br/>
        중독은 어제로,<br/>
        행복은 오늘로
      </h1>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      setTimeout(() => {
        router.push({ path: "/CardNewsMain" });
      }, 3000);
    });
    return {};
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fff;
  overflow: hidden;
  touch-action: none;
}

.logo {
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.8rem;
  color: #2260FF;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
}
</style>

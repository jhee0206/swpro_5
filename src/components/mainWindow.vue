<template>
  <div class="container">
    <div class="content">
      <img src="@/assets/logo.svg" alt="로고" class="logo" />
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
  background: linear-gradient(to bottom, #2DE6B3, #3EC0C6);
  overflow: hidden;
  touch-action: none;
}

.logo {
  width: 127.5px;
  height: 146px;
  top:336px;
  left:133px;
}

</style>

<template>
  <div id="app">
    <router-view /> </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* 전역 스타일 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f4f4;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
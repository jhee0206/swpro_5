<template>
  <nav class="bottom-nav">
    <div class ="nav-item" @click="goTo('Home')">
      <i class="icon">🏠</i>
      <!--<img src="/icon/home_icon.png" class="icon" alt="홈"/>-->
    </div>
    <div class="nav-item" @click="goTo('Chat')">
      <i class="icon">💬</i>
      <!--<img src="/icon/list_icon.png" class="icon" alt="설문조사"/>-->
    </div>
    <div class="nav-item" @click="goTo('profile')">
      <i class="icon">👤</i>
      <!--<img src="/icon/chat_icon.png" class="icon" alt="챗봇"/>-->
    </div>
    <div class="nav-item" @click="goTo('diar')">
      <i class="icon">📔</i>
      <!--<img src="/icon/diar_icon.png" class="icon" alt="다이어리"/>-->
    </div>
  </nav>
</template>

<script>
export default {
  name:'NavigationBar',
  methods:{
    goTo(route){
      this.$router.push({name:route});
    }
  }
}
</script>

<style scoped>
.bottom-nav{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1a4eff;
  justify-content:space-between;
  display: flex;
  color:white;
  padding: 0 20px;
}

.nav-item{
  text-align: center;
  font-size: 35px;
  cursor: pointer;
}
</style>

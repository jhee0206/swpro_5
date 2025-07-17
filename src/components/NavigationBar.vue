<template>
  <nav class="bottom-nav">
    <div class ="nav-item" @click="goTo('CardNewsMain')">
      <img src="/icon/home.svg" class="icon" alt="홈"/>
    </div>
    <div class="nav-item" @click="goTo('Chat')">
      <img src="/icon/chat.svg" class="icon" alt="챗봇"/>
    </div>
    <div class="nav-item" @click="goTo('list')">
      <img src="/icon/list.svg" class="icon" alt="설문조사"/>
    </div>
    <div class="nav-item" @click="goTo('MindCheckJournal')">
      <img src="/icon/dair.svg" class="icon" alt="다이어리"/>
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
  height: 65px;
  background-color: #2260FF;
  justify-content:space-between;
  display: flex;
  padding: 0 25px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.nav-item{
  text-align: center;
  font-size: 33px;
  cursor: pointer;
  margin-top: 13px;
}
</style>

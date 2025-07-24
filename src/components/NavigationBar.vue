<template>
  <nav class="bottom-nav">
    <div class ="nav-item" @click="goTo('CardNewsMain')">
      <img src="/icon/home.svg" class="icon" alt="홈"/>
      <span class="label">홈</span>
    </div>
    <div class="nav-item" @click="goTo('Chat')">
      <img src="/icon/chat.svg" class="icon" alt="챗봇"/>
      <span class="label">자가진단</span>
    </div>
    <div class="nav-item" @click="goTo('list')">
      <img src="/icon/list.svg" class="icon" alt="설문조사"/>
      <span class="label">챗봇</span>
    </div>
    <div class="nav-item" @click="goTo('MyRecord')">
      <img src="/icon/dair.svg" class="icon" alt="다이어리"/>
      <span class="label">하루톡</span>
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
  background-color: rgb(181, 185, 202);
  justify-content:space-between;
  display: flex;
  padding: 0 25px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Cafe24 Ssurround', serif;
}

.icon {
  width: 27px;
  height: 27px;
  margin-bottom: 4px;
}

.label {
  font-size: 11px;
  color: #ffffff;
}
</style>

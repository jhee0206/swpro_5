<template>
  <nav class="bottom-nav">
    <div class="nav-item"
         v-for="item in navItems"
         :key="item.name"
         @click="goTo(item.route)">
      <img
          :src="currentRoute === item.route ? item.activeIcon : item.icon"
        class="icon"
        :alt="item.label" />
      <span class="label" :class="{active:currentRoute === item.route}">
        {{ item.name }}
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data(){
    return{
      navItems: [
        { name:'홈', label:'홈', route:'CardNewsMain', icon:'/icon/home_n.svg', activeIcon:'/icon/home_y.svg' },
        { name:'카드뉴스', label:'카드뉴스', route:'NextDetailWindow', icon:'/icon/card_n.svg', activeIcon:'/icon/card_y.svg' },
        { name:'챗봇', label:'챗봇', route:'ChatbotView', icon:'/icon/chat_n.svg', activeIcon:'/icon/chat_y.svg' },
        { name:'assist', label:'자가진단', route:'SurveyMain', icon:'/icon/assist_n.svg', activeIcon:'/icon/assist_y.svg' },
        { name:'하루톡', label:'하루톡', route:'MyRecord', icon:'/icon/diar_n.svg', activeIcon:'/icon/diar_y.svg' }
      ]
    }
  },
  computed:{
    currentRoute(){
      return this.$route.name;
    }
  },
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
  background-color: rgb(255, 255, 255);
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
  font-family: 'Pretendard', serif;
}

.icon {
  width: 27px;
  height: 27px;
  margin-bottom: 4px;
}

.label {
  font-size: 11px;
  color: #C2C2C2;
}

/* 활성화된 버튼 글자 색 */
.label.active {
  color: #23ADB4;
}
</style>
<template>
  <div class="container"
       @touchstart="handleStart"
       @touchend="handleEnd"
       @mousedown="handleStart"
       @mouseup="handleEnd">
       <!--@touchstart="handleTouchStart"
       @touchend="handleTouchEnd">-->
    <div class="content">
      <hr class="divider" />
      <img src="/logo.png" alt="로고" class="logo_v.svg" />
      <h1 class="title">
        마약 예방<br />
        프로젝트
      </h1>
      <hr class="divider" />
    </div>
  </div>
</template>

<!--<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router=useRouter()
const touchStartX = ref(0)
const touchEndX=ref(0)
 const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].clientX
 }

 const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].clientX

   const diff = touchStartX.value - touchEndX.value

   if(diff>50){
     router.push('/CardNewsMain')
   }
 }
</script>-->

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const startX = ref(0);
const endX = ref(0);

const handleStart = (e) => {
  // 모바일 터치 이벤트(e.changedTouches) or 마우스 이벤트(e.clientX)
  startX.value = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
};

const handleEnd = (e) => {
  endX.value = e.type.includes('touch') ? e.changedTouches[0].clientX : e.clientX;
  const diff = startX.value - endX.value;
  if (diff > 50) {
    router.push('/CardNewsMain');
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

.divider {
  width: 100%;
  margin: 10px auto;
  border: none;
  height: 1px;
  background-color: #2260FF;
}


.logo {
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
}

.title {
  font-size: 2rem;
  color: #2260FF;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
}
</style>

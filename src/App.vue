<template>
  <div id="app">
    <MindCheckJournal />
  </div>
</template>

<script>
import MindCheckJournal from './components/MindCheckJournal.vue'; // MindCheckJournal.vue 파일 경로에 맞게 수정

export default {
  name: 'App',
  components: {
    MindCheckJournal // 사용할 컴포넌트를 등록합니다.
  }
};
</script>


import { createApp } from 'vue';
import App from './App.vue'; // App.vue 컴포넌트를 가져옵니다.

const app = createApp(App);
app.mount('#app'); // public/index.html의 <div id="app">에 Vue 앱을 마운트합니다.
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 불러오기

createApp(App).use(router).mount('#app');
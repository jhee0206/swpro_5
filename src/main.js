import { createApp } from 'vue'
import App from './App.vue' // 루트 컴포넌트로 사용할 App.vue 필요
import router from './router' // index.js에서 export한 라우터 불러오기

createApp(App).use(router).mount('#app')

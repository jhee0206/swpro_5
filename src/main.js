import { createApp } from 'vue'
import App from './App.vue' // 루트 컴포넌트로 사용할 App.vue 필요
import router from './router'; // 이렇게 수정해야 합니다.

createApp(App).use(router).mount('#app')

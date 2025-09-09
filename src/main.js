// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initDB } from './db.js' // db.js에서 initDB 함수를 가져옵니다.

const app = createApp(App)

app.use(router).mount('#app')

// 앱이 마운트된 후 (또는 그 직전) DB 초기화를 시도합니다.
// initDB는 Promise를 반환하므로, .then()이나 await (top-level await 사용 시)으로 처리할 수 있습니다.
// 여기서는 간단하게 .catch()로 에러만 처리합니다.
initDB().catch(err => {
    console.error('백그라운드 DB 초기화 실패:', err);
    // DB 초기화 실패 시 사용자에게 알림 등의 처리를 추가할 수 있습니다.
    // alert('데이터베이스에 연결할 수 없습니다. 기능을 사용하지 못할 수 있습니다.');
});
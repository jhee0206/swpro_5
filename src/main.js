// main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initDB } from './db.js'; // 1. initDB 함수를 가져옵니다.

// 2. initDB()를 먼저 호출합니다.
initDB().then(() => {
    // 3. DB 초기화가 성공하면(.then) 그 안에서 앱을 생성하고 마운트합니다.
    const app = createApp(App);
    app.use(router);
    app.mount('#app');
}).catch(err => {
    console.error('DB 초기화에 실패하여 앱을 시작할 수 없습니다:', err);
    // 사용자에게 DB를 사용할 수 없다는 메시지를 보여줄 수도 있습니다.
    document.getElementById('app').innerHTML = '오류: 데이터베이스를 초기화할 수 없어 앱을 실행할 수 없습니다.';
});

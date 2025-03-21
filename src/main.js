import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // ✅ 라우터 임포트 확인

const app = createApp(App);
app.use(router); // ✅ 라우터 등록 확인
app.mount('#app');

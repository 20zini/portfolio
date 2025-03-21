import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProjectDetail from '@/views/ProjectDetail.vue'; // 🚀 올바른 경로 확인

const routes = [
    { path: '/', component: HomePage },
    { path: '/project/:id', component: ProjectDetail }, // ✅ URL 파라미터 포함 확인
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import CardListView from '../views/CardListView.vue';
import CardDetailView from '../views/CardDetailView.vue';

const routes = [
    {
        path: '/',
        name: 'CardList',
        component: CardListView
    },
    {
        path: '/card/:id',
        name: 'CardDetail',
        component: CardDetailView,
        props: true
    }
];

const router = createRouter({
    // **여기를 수정합니다.**
    // process.env.BASE_URL 대신 import.meta.env.BASE_URL 사용
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
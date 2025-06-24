import { createRouter, createWebHistory } from 'vue-router';
import CardNewsMain from '../components/maincard.vue';
import CardNewsDetail from '../components/CardNewsDetail.vue';
import NextDetailWindow from "@/components/nextdetailwin.vue";

const routes = [
    {
        path: '/',
        name:'CardNewsMain',
        component: CardNewsMain,
    },
    {
        path:'/detail',
        name:'CardNewsDetail',
        component: CardNewsDetail,
    },
    {
        path:'/NextDetailWindow',
        name:'NextDetailWindow',
        component: NextDetailWindow,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    });
export default router;
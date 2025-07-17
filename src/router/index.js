import { createRouter, createWebHistory } from 'vue-router';
import CardNewsMain from '../components/maincard.vue';
import CardNewsDetail from '../components/CardNewsDetail.vue';
import NextDetailWindow from "../components/nextdetailwin.vue";
import DiarList from "@/components/DiarList.vue";
import mainWindow from "../components/mainWindow.vue";
import MindCheckJournal from "@/components/MindCheckJournal.vue";
import DiaryDetail from "@/components/DiaryDetail.vue";



const routes = [

    {
        path: '/CardNewsMain',
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
    },

    {
        path:'/',
        name:'mainWindow',
        component: mainWindow,
    },

    {
        path: '/DiaryDetail',
        name: 'DiaryDetail',
        component:DiaryDetail
    },

    {
        path: '/DiarList',
        name: 'DiarList',
        component: DiarList,
    },
    {
        path: '/MindCheckJournal',
        name: 'MindCheckJournal',
        component: MindCheckJournal,
    },
    {
        path: '/education',
        component: () => import('@/components/nextdetailwin.vue')
    },
    /*{
        path: '/news',
        component: () => import('@/views/NewsPage.vue')
    },*/
    /*{
        path: '/check',
        component: () => import('@/views/SelfCheck.vue')
    },*/
    {
        path: '/support',
        component: () => import('@/components/MindCheckJournal.vue')
    }


];

const router = createRouter({

    history: createWebHistory(),

    routes,

});

export default router;

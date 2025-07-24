import { createRouter, createWebHistory } from 'vue-router';
import CardNewsMain from '../components/maincard.vue';
import CardNewsDetail from '../components/CardNewsDetail.vue';
import NextDetailWindow from "../components/nextdetailwin.vue";
import DiarList from "@/components/DiarList.vue";
import mainWindow from "../components/mainWindow.vue";
import MindCheckJournal from "@/components/MindCheckJournal.vue";
import DiaryDetail from "@/components/DiaryDetail.vue";
import JournalImage from "@/components/JournalImage.vue";
import MyRecord from "@/components/MyRecord.vue";



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
        path: '/JournalImage',
        name: 'JournalImage',
        component: JournalImage,
    },
    {
        path: '/MyRecord', // <--- 이 라우트를 추가해주세요!
        name: 'MyRecord', // 이 라우트의 이름 (내비게이션바에서 사용할 이름)
        component: MyRecord, // 위에서 임포트한 MyRecord 컴포넌트
    }


];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});


export default router;

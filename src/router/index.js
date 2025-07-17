import { createRouter, createWebHistory } from 'vue-router';
import CardNewsMain from '../components/maincard.vue';
import CardNewsDetail from '../components/CardNewsDetail.vue';
import NextDetailWindow from "../components/nextdetailwin.vue";
import DiarList from "@/components/DiarList.vue";
import mainWindow from "../components/mainWindow.vue";
import MindCheckJournal from "@/components/MindCheckJournal.vue";



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
        path: '/DiarList',
        name: 'DiarList',
        component: DiarList,
    },
    {
        path: '/MindCheckJournal',
        name: 'MindCheckJournal',
        component: MindCheckJournal,
    }

];

const router = createRouter({

    history: createWebHistory(),

    routes,

});

export default router;

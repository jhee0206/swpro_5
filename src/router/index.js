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
import ChatbotWindow from "@/components/chatbot/ChatbotWindow.vue";
import ChatbotView from "@/components/chatbot/ChatbotView.vue";
import ChatMessage from "@/components/chatbot/ChatMessage.vue";
import ExpandableText from "@/components/chatbot/ExpandableText.vue";
import ChatButtonList from "@/components/chatbot/ChatButtonList.vue";

import SurveyMain from '@/views/SurveyMain.vue'
import SurveyQ1 from "@/views/survey_questions/SurveyQ1.vue";
import SurveyQ2 from "@/views/survey_questions/SurveyQ2.vue";
import SurveyQ3 from "@/views/survey_questions/SurveyQ3.vue";
import SurveyQ4 from "@/views/survey_questions/SurveyQ4.vue";
import SurveyQ5 from "@/views/survey_questions/SurveyQ5.vue";
import SurveyQ6 from "@/views/survey_questions/SurveyQ6.vue";
import SurveyQ7 from "@/views/survey_questions/SurveyQ7.vue";
import SurveyQ8 from "@/views/survey_questions/SurveyQ8.vue";

import SurveyEnd from "@/views/survey_questions/SurveyEnd.vue";

import SurveyResultLow from "@/views/survey_result/SurveyResultLow.vue";
import SurveyResultMiddle from "@/views/survey_result/SurveyResultMiddle.vue";
import SurveyResultHigh from "@/views/survey_result/SurveyResultHigh.vue";

const routes = [
    { path: '/SurveyMain', component: SurveyMain, name: "SurveyMain" },
    { path: '/survey/q1', component: SurveyQ1, name: "SurveyQ1"},
    { path: '/survey/q2', component: SurveyQ2, name: "SurveyQ2"},
    { path: '/survey/q3', component: SurveyQ3, name: "SurveyQ3" },
    { path: '/survey/q4', component: SurveyQ4, name: "SurveyQ4" },
    { path: '/survey/q5', component: SurveyQ5, name: "SurveyQ5" },
    { path: '/survey/q6', component: SurveyQ6, name: "SurveyQ6" },
    { path: '/survey/q7', component: SurveyQ7, name: "SurveyQ7" },
    { path: '/survey/q8', component: SurveyQ8, name: "SurveyQ8" },
    { path: '/survey/end', component: SurveyEnd, name: "SurveyEnd" },
    { path: '/survey/result/low', component: SurveyResultLow },
    { path: '/survey/result/middle', component: SurveyResultMiddle },
    { path: '/survey/result/high', component: SurveyResultHigh },

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
    },
    {
        path: '/ChatbotWindow',
        name: 'ChatbotWindow',
        component: ChatbotWindow,
    },

    {
        path: '/ChatMessage',
        name: 'ChatMessage',
        component: ChatMessage,
    },
    {
        path: '/ChatbotView',
        name: 'ChatbotView',
        component: ChatbotView,
    },
    {
        path: '/ExpandableText',
        name: 'ExpandableText',
        component: ExpandableText,
    },
    {
        path: '/ChatButtonList',
        name: 'ChatButtonList',
        component: ChatButtonList,
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

export default router

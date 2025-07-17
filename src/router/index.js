import { createRouter, createWebHistory } from 'vue-router'
import SurveyMain from '@/views/component/SurveyMain.vue'
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
    { path: '/', component: SurveyMain },
    { path: '/survey/q1', component: SurveyQ1 },
    { path: '/survey/q2', component: SurveyQ2 },
    { path: '/survey/q3', component: SurveyQ3 },
    { path: '/survey/q4', component: SurveyQ4 },
    { path: '/survey/q5', component: SurveyQ5 },
    { path: '/survey/q6', component: SurveyQ6 },
    { path: '/survey/q7', component: SurveyQ7 },
    { path: '/survey/q8', component: SurveyQ8 },
    { path: '/survey/end', component: SurveyEnd },
    { path: '/survey/result/low', component: SurveyResultLow },
    { path: '/survey/result/middle', component: SurveyResultMiddle },
    { path: '/survey/result/high', component: SurveyResultHigh },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

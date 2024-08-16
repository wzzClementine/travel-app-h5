
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue'; // Home 组件
import  Cover from '@/pages/Cover.vue'; // Cover 组件
import TravelCover from "@/pages/travel/TravelCover.vue";
import PlanSelection from "@/pages/travel/PlanCreation/PlanSelection.vue";
import PlanTitle from "@/pages/travel/PlanCreation/PlanTitle.vue";


const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/travel',
        name: 'TravelCover',
        component: TravelCover
    },
    {
        path: '/plan-creation/plan-selection', // 这个路径可以自定义
        name: 'PlanSelection',
        component: PlanSelection
    },
    {
        path: '/plan-creation/input-plan-title', // 这个路径可以自定义
        name: 'PlanTitle',
        component: PlanTitle
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;

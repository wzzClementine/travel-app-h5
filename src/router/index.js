
import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue'; // Home 组件
import  Cover from '@/pages/Cover.vue'; // Cover 组件
import TravelCover from "@/pages/travel/TravelCover.vue";
import PlanSelection from "@/pages/travel/PlanCreation/PlanSelection.vue";
import PlanTitle from "@/pages/travel/PlanCreation/PlanTitle.vue";
import PlanDestinationSetup from "@/pages/travel/PlanCreation/PlanDestinationSetup.vue";
import PlanDateSetup from "@/pages/travel/PlanCreation/PlanDateSetup.vue";
import PlanPreview from "@/pages/travel/PlanCreation/PlanPreview.vue";


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
        path: '/plan-creation/plan-selection', // 确保路径与路由配置匹配
        name: 'PlanSelection',
        component: PlanSelection
    },
    {
        path: '/plan-creation/input-plan-title',
        name: 'PlanTitle',
        component: PlanTitle
    },
    {
        path: '/plan-creation/plan-destination-setup',
        name: 'PlanDestinationSetup',
        component: PlanDestinationSetup
    },
    {
        path: '/plan-creation/plan-date-setup',
        name: 'PlanDateSetup',
        component: PlanDateSetup
    },
    {
        path: '/plan-creation/plan-preview', // 确保路径与访问URL一致
        name: 'PlanPreview',
        component: PlanPreview
    },
];


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;

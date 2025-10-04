import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import {  appRoutes } from './routes';

const routes: RouteRecordRaw[] = [ ...appRoutes  ];

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },
});



export default router;

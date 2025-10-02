import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import appSetting from '@/app-setting';
import { useAppStore } from '@/core/store';
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

router.beforeEach((to, from, next) => {
    const store = useAppStore();

    if (to.meta.layout === 'auth') {
        store.setMainLayout('auth');
    } else {
        store.setMainLayout('app');
    }




    next();
});

router.afterEach(() => {
    appSetting.changeAnimation();
});

export default router;

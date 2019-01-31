import VueRouter from 'vue-router';

import {routes} from './Routes';

export const router = new VueRouter({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes,
});
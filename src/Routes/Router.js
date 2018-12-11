import VueRouter from 'vue-router';

import {routes} from './Routes';

export const router = new VueRouter({
    mode: 'history',
    routes,
});
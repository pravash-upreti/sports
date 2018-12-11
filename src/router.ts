import Vue from 'vue';
import Router from 'vue-router';

import {
  BASE_ROUTES,
  FUTSAL_ROUTES,
  OTHER_GAMES_ROUTES,
  TABLE_TENNIS_ROUTES,
  CARROM_BOARD_ROUTES
} from './constants/routes';

const DEFAULT_PAGE_TITLE = 'LF Sports';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: []
});

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_PAGE_TITLE}` : DEFAULT_PAGE_TITLE;
});

export default router;

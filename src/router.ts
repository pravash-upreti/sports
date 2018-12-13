import Vue from 'vue';
import Router from 'vue-router';

import {
  BASE_ROUTES,
  FUTSAL_ROUTES,
  OTHER_GAMES_ROUTES,
  TABLE_TENNIS_ROUTES,
  CARROM_BOARD_ROUTES
} from './constants/routes';

import Teams from '@/views/common/teams/Teams.vue';
import Recent from '@/views/common/recent/Recent.vue';
import Results from '@/views/common/results/Results.vue';
import Fixtures from '@/views/common/fixtures/Fixtures.vue';
import TableTennis from '@/views/table-tennis/TableTennis.vue';

const DEFAULT_PAGE_TITLE = 'LF Sports';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: BASE_ROUTES.TABLE_TENNIS,
      component: TableTennis,
      meta: {
        title: 'Table Tennis'
      },
      children: [
        // {
        //   path: '',
        //   redirect: TABLE_TENNIS_ROUTES.HOME
        // },
        // {
        //   path: TABLE_TENNIS_ROUTES.HOME,
        //   component: Recent,
        //   meta: {
        //     title: 'Table Tennis - Home'
        //   }
        // },
        {
          path: TABLE_TENNIS_ROUTES.FIXTURES,
          component: Fixtures,
          meta: {
            title: 'Table Tennis - Fixtures'
          }
        },
      //   {
      //     path: TABLE_TENNIS_ROUTES.RESULTS,
      //     component: Results,
      //     meta: {
      //       title: 'Table Tennis - Results'
      //     }
      //   },
      //   {
      //     path: TABLE_TENNIS_ROUTES.TEAMS,
      //     component: Teams,
      //     meta: {
      //       title: 'Table Tennis - Teams'
      //     }
      //   },
      //   /* {
      //     path: TABLE_TENNIS_ROUTES.FIXTURE,
      //     component: TableTennisScoreModal,
      //     meta: {
      //       title: 'Table Tennis - Fixture'
      //     }
      //   }, */
      //   {
      //     path: '*',
      //     redirect: TABLE_TENNIS_ROUTES.HOME
      //   }
      ]
    }
  ]
});

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_PAGE_TITLE}` : DEFAULT_PAGE_TITLE;
});

export default router;

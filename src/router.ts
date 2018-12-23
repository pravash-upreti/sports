import Vue from 'vue';
import Router from 'vue-router';

import {
  BASE_ROUTES,
  FUTSAL_ROUTES,
  DASHAIN_CUP_ROUTES,
  TABLE_TENNIS_ROUTES,
  CARROM_BOARD_ROUTES
} from './constants/routes';

import Futsal from '@/views/futsal/Futsal.vue';
import Teams from '@/views/common/teams/Teams.vue';
import Recent from '@/views/common/recent/Recent.vue';
import Results from '@/views/common/results/Results.vue';
import FutsalStats from '@/views/futsal/FutsalStats.vue';
import FutsalPoints from '@/views/futsal/FutsalPoints.vue';
import DashainCup from '@/views/dashain-cup/DashainCup.vue';
import CarromBoard from '@/views/carrom-board/CarromBoard.vue';
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
        {
          path: TABLE_TENNIS_ROUTES.HOME,
          component: Recent,
          meta: {
            title: 'Table Tennis - Home'
          }
        },
        {
          path: TABLE_TENNIS_ROUTES.FIXTURES,
          component: Fixtures,
          meta: {
            title: 'Table Tennis - Fixtures'
          }
        },
        {
          path: TABLE_TENNIS_ROUTES.RESULTS,
          component: Results,
          meta: {
            title: 'Table Tennis - Results'
          }
        },
        {
          path: TABLE_TENNIS_ROUTES.TEAMS,
          component: Teams,
          meta: {
            title: 'Table Tennis - Teams'
          }
        },
      //   /* {
      //     path: TABLE_TENNIS_ROUTES.FIXTURE,
      //     component: TableTennisScoreModal,
      //     meta: {
      //       title: 'Table Tennis - Fixture'
      //     }
      //   }, */
        {
          path: '*',
          redirect: TABLE_TENNIS_ROUTES.HOME
        }
      ]
    },
    {
      path: BASE_ROUTES.FUTSAL,
      component: Futsal,
      meta: {
        title: 'Futsal'
      },
      children: [
        {
          path: FUTSAL_ROUTES.HOME,
          component: Recent,
          meta: {
            title: 'Futsal - Home'
          }
        },
        {
          path: FUTSAL_ROUTES.FIXTURES,
          component: Fixtures,
          meta: {
            title: 'Futsal - Fixtures'
          }
        },
        {
          path: FUTSAL_ROUTES.RESULTS,
          component: Results,
          meta: {
            title: 'Futsal - Results'
          }
        },
        {
          path: FUTSAL_ROUTES.POINTS,
          component: FutsalPoints,
          meta: {
            title: 'Futsal - Points'
          }
        },
        {
          path: FUTSAL_ROUTES.STATS,
          component: FutsalStats,
          meta: {
            title: 'Futsal - Stats'
          }
        },
        {
          path: FUTSAL_ROUTES.TEAMS,
          component: Teams,
          meta: {
            title: 'Futsal - Teams'
          }
        },
      //   /* {
      //     path: FUTSAL_ROUTES.FIXTURE,
      //     component: TableTennisScoreModal,
      //     meta: {
      //       title: 'Futsal - Fixture'
      //     }
      //   }, */
        {
          path: '*',
          redirect: FUTSAL_ROUTES.HOME
        }
      ]
    },
    {
      path: BASE_ROUTES.DASHAIN_CUP,
      component: DashainCup,
      meta: {
        title: 'Dashain Cup'
      },
      children: [
        {
          path: DASHAIN_CUP_ROUTES.HOME,
          component: Recent,
          meta: {
            title: 'Dashain Cup - Home'
          }
        },
        {
          path: DASHAIN_CUP_ROUTES.FIXTURES,
          component: Fixtures,
          meta: {
            title: 'Dashain Cup - Fixtures'
          }
        },
        {
          path: DASHAIN_CUP_ROUTES.RESULTS,
          component: Results,
          meta: {
            title: 'Dashain Cup - Results'
          }
        },
        {
          path: DASHAIN_CUP_ROUTES.POINTS,
          component: FutsalPoints,
          meta: {
            title: 'Dashain Cup - Points'
          }
        },
        {
          path: DASHAIN_CUP_ROUTES.STATS,
          component: FutsalStats,
          meta: {
            title: 'Dashain Cup - Stats'
          }
        },
        {
          path: DASHAIN_CUP_ROUTES.TEAMS,
          component: Teams,
          meta: {
            title: 'Dashain Cup - Teams'
          }
        },
      //   /* {
      //     path: DASHAIN_CUP_ROUTES.FIXTURE,
      //     component: TableTennisScoreModal,
      //     meta: {
      //       title: 'Dashain Cup - Fixture'
      //     }
      //   }, */
        {
          path: '*',
          redirect: DASHAIN_CUP_ROUTES.HOME
        }
      ]
    },
    {
      path: BASE_ROUTES.CARROM_BOARD,
      component: CarromBoard,
      meta: {
        title: 'Carrom Board'
      },
      children: [
        {
          path: CARROM_BOARD_ROUTES.HOME,
          component: Recent,
          meta: {
            title: 'Carrom Board - Home'
          }
        },
        {
          path: CARROM_BOARD_ROUTES.FIXTURES,
          component: Fixtures,
          meta: {
            title: 'Carrom Board - Fixtures'
          }
        },
        {
          path: CARROM_BOARD_ROUTES.RESULTS,
          component: Results,
          meta: {
            title: 'Carrom Board - Results'
          }
        },
        {
          path: CARROM_BOARD_ROUTES.TEAMS,
          component: Teams,
          meta: {
            title: 'Carrom Board - Teams'
          }
        },
      //   /* {
      //     path: CARROM_BOARD_ROUTES.FIXTURE,
      //     component: TableTennisScoreModal,
      //     meta: {
      //       title: 'Carrom Board - Fixture'
      //     }
      //   }, */
        {
          path: '*',
          redirect: CARROM_BOARD_ROUTES.HOME
        }
      ]
    }
  ]
});

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | ${DEFAULT_PAGE_TITLE}` : DEFAULT_PAGE_TITLE;
});

export default router;

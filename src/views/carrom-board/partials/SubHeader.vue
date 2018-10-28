<template>
  <div class="sub-header">
    <ul class="nav nav--secondary container">
      <li>
        <router-link 
          :to="routes.HOME"
          exact-active-class="active"
          exact
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link 
          :to="routes.RESULTS"
          exact-active-class="active"
          exact
        >
          Results
        </router-link>
      </li>
      <li>
        <router-link 
          :to="routes.FIXTURES"
          exact-active-class="active"
          exact
        >
          Fixtures
        </router-link>
      </li>
      <li>
        <router-link 
          :to="routes.TEAMS"
          exact-active-class="active"
          exact
        >
          Teams
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { CARROM_BOARD_ROUTES } from '@/constants/routes';

@Component
export default class SubHeader extends Vue {
  public routes: object = CARROM_BOARD_ROUTES;
}
</script>

<template>
  <div class="sub-header">
    <ul class="nav nav--secondary container">
      <li>
        <router-link 
          :to="futsalRoutes.HOME"
          exact-active-class="active"
          exact
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link 
          :to="futsalRoutes.RESULTS"
          exact-active-class="active"
          exact
        >
          Results
        </router-link>
      </li>
      <li>
        <router-link 
          :to="futsalRoutes.FIXTURES"
          exact-active-class="active"
          exact
        >
          Fixtures
        </router-link>
      </li>
      <li>
        <router-link 
          :to="futsalRoutes.POINTS"
          exact-active-class="active"
          exact
        >
          Points
        </router-link>
      </li>
      <li>
        <router-link 
          :to="futsalRoutes.STATS"
          exact-active-class="active"
          exact
        >
          Stats
        </router-link>
      </li>
      <li>
        <router-link 
          :to="futsalRoutes.TEAMS"
          exact-active-class="active"
          exact
        >
          Teams
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { FUTSAL_ROUTES } from '../../../constants/routes';

export default {
  data: function() {
    return {
      futsalRoutes: FUTSAL_ROUTES
    };
  }
};
</script>

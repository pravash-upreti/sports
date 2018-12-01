<template>
  <div>
    <div 
      v-if="loading"
      class="container" 
    >
      <loading-icon />
    </div>
    <div 
      v-else-if="error"
      class="container" 
    >
      <div class="alert alert-error">Unable to load data. Please try again later.</div>
    </div>
    <div 
      v-else
      class="carrom-board"
    >
      <div class="container-fluid">
        <sub-header :routes="routes" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

import EventBus from '@/events/eventBus';
import { CARROM_BOARD_ROUTES } from '@/constants/routes';
import SubHeader from '@/components/common/SubHeader.vue';
import * as FixtureService from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { TournamentDataInterface, TournamentDataResponseInterface } from '@/interfaces/interfaces';

@Component({
  components: { SubHeader, LoadingIcon }
})
export default class CarromBoard extends Vue {
  public data: TournamentDataInterface | null = null;
  public error: boolean = false;
  public loading: boolean = true;
  public routes: object = CARROM_BOARD_ROUTES;
  public fixtureLink: string = CARROM_BOARD_ROUTES.FIXTURE;

  public created() {
    EventBus.$emit('change-logo-title', 'Carrom Board');

    this.fetchData();
  }

  public fetchData() {
    axios
      .get(process.env.VUE_APP_API_CARROM_BOARD)
      .then((response) => {
        this.data = this.getSanitizedData(response.data.data);

        const title = this.data && this.data.details.title;
        const year = this.data && this.data.details.year;

        EventBus.$emit('change-logo-title', title, year);
      })
      .catch(() => {
        this.error = true;
      })
      .then(() => {
        this.loading = false;
      });
  }

  public getSanitizedData(rawData: TournamentDataResponseInterface): TournamentDataInterface {
    const data = {
      teams: rawData.teams,
      details: rawData.details,
      allFixtures: rawData.fixtures,
      statuses: rawData.statuses || [],
      results: FixtureService.getResults(rawData.fixtures),
      recents: FixtureService.getRecentFixtures(rawData, 5),
      fixtures: FixtureService.getFixtures(rawData.fixtures),
      rounds: FixtureService.getRounds(rawData.rounds) || [],
      categories: FixtureService.getCategories(rawData.categories) || []
    };

    return data;
  }
}
</script>

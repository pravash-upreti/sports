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
      <div class="tournament-content">
        <div class="container-fluid">
          <sub-header />
          <search-bar :search-link="searchLink" />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

import EventBus from '@/events/eventBus';
import SubHeader from './partials/SubHeader.vue';
import { CARROM_BOARD_ROUTES } from '@/constants/routes';
import SearchBar from '@/components/common/SearchBar.vue';
import * as FixtureService from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { TournamentDataInterface, TournamentDataResponseInterface } from '@/interfaces/interfaces';

@Component({
  components: { SubHeader, SearchBar, LoadingIcon }
})
export default class CarromBoard extends Vue {
  public data: TournamentDataInterface | null = null;
  public error: boolean = false;
  public loading: boolean = true;
  public fixtureLink: string = CARROM_BOARD_ROUTES.FIXTURE;
  public searchLink: string = CARROM_BOARD_ROUTES.SEARCH;

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
      rounds: rawData.rounds || [],
      details: rawData.details,
      statuses: rawData.statuses || [],
      allFixtures: rawData.fixtures,
      categories: rawData.categories || [],
      recents: FixtureService.getRecentFixtures(rawData, 5),
      results: FixtureService.getResults(rawData.fixtures),
      fixtures: FixtureService.getFixtures(rawData.fixtures)
    };

    return data;
  }
}
</script>

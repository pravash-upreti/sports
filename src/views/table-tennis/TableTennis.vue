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
      class="table-tennis"
    >
      <div class="tournament-content">
        <div class="container-fluid">
          <sub-header />
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
import { TABLE_TENNIS_ROUTES } from '@/constants/routes';
import * as FixtureService from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { TournamentDataInterface, TournamentDataResponseInterface } from '@/interfaces/interfaces';


@Component({
  components: { SubHeader, LoadingIcon }
})
export default class TableTennis extends Vue {
  public error: boolean = false;
  public loading: boolean = true;
  public data: TournamentDataInterface | null = null;
  public fixtureLink: string = TABLE_TENNIS_ROUTES.FIXTURE;

  public created() {
    EventBus.$emit('change-logo-title', 'Table Tennis');

    this.fetchData();
  }

   public fetchData() {
    axios
      .get(process.env.VUE_APP_API_TABLE_TENNIS)
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
      categories: FixtureService.getCategories(rawData.categories) || [],
      recents: FixtureService.getRecentFixtures(rawData, 5),
      results: FixtureService.getResults(rawData.fixtures),
      fixtures: FixtureService.getFixtures(rawData.fixtures)
    };

    return data;
  }
}
</script>

<template>
  <div v-if="data.loading">
    <loading-icon />
  </div>
  <div v-else-if="data.error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="table-tennis">
    <div class="container-fluid">
      <sport-header :title="title" :categories="data.data.categories" :rounds="data.data.rounds" :routes="routes" />
      <div class="tournament-content-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Watch } from 'vue-property-decorator';

import sports from '@/constants/sports';
import EventBus from '@/events/eventBus';
import { TABLE_TENNIS_ROUTES } from '@/constants/routes';
import * as FixtureService from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';
import { TournamentDataInterface, TournamentDataResponseInterface } from '@/interfaces/interfaces';


@Component({
  components: { SportHeader, LoadingIcon }
})
export default class TableTennis extends Vue {
  public data: any = { loading: true };
  public routes: object = TABLE_TENNIS_ROUTES;
  public fixtureLink: string = TABLE_TENNIS_ROUTES.FIXTURE;

  public created() {
    this.fetchData();
  }

  public fetchData() {
    const sport = sports.TABLE_TENNIS;
    const season = this.$route.params.season;

    let data = this.$parent.getTournamentData(sport, season);

    if (data && Object.keys(data).length) {
      this.data = data;

      return;
    }

    data = {
      data: null,
      error: false,
      loading: true
    };

    this.data = data;

    this.$parent.fetchTournamentData(sport, season)
      .then((response: any) => {
        const d = response.data;

        if (!d.status) {
          data = Object.assign(data, { data: null, error: true });
        } else {
          data = Object.assign(data, { data: d.data, error: false });
        }
      })
      .catch(() => {
        data = Object.assign(data, { data: null, error: true });
      })
      .then(() => {
        data = Object.assign(data, { loading: false });
        this.data = data;
      });
  }

  public getSanitizedData(rawData: TournamentDataResponseInterface): TournamentDataInterface {
    const data = {
      teams: rawData.teams,
      details: rawData.details,
      allFixtures: rawData.fixtures,
      statuses: rawData.statuses || [],
      recents: FixtureService.getRecentFixtures(rawData, 0),
      results: FixtureService.getResults(rawData.fixtures),
      fixtures: FixtureService.getFixtures(rawData.fixtures),
      rounds: FixtureService.getRounds(rawData.rounds) || [],
      categories: FixtureService.getCategories(rawData.categories) || []
    };

    return data;
  }

  get title(): string {
    return `Table Tennis ${this.$route.params.season}`;
  }
}
</script>

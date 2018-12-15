<template>
  <div v-if="loadingData">
    <loading-icon/>
  </div>
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="table-tennis">
    <div class="container-fluid">
      <sport-header
        :title="title"
        :categories="data.categories"
        :rounds="data.rounds"
        :routes="routes"
      />
      <div class="tournament-content-wrapper">
        <router-view :data="data" :fixture-link="fixtureLink"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import sports from '@/constants/sports';
import { TABLE_TENNIS_ROUTES } from '@/constants/routes';
import * as FixtureService from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';
import { TournamentDataInterface } from '@/interfaces/interfaces';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class TableTennis extends Vue {
  @Prop() public updateActives!: any;
  @Prop() public loadingData!: boolean;
  @Prop() public getTournamentData!: any;

  public data: any = {};
  public error: boolean = false;
  public routes: object = TABLE_TENNIS_ROUTES;
  public fixtureLink: string = TABLE_TENNIS_ROUTES.FIXTURE;

  @Watch('loadingData', { immediate: true, deep: true })
  public onLoadingDataChanged(newVal: boolean, oldVal: boolean) {
    if (newVal !== oldVal) {
      this.fetchData();
    }
  }

  public created() {
    const sport = sports.TABLE_TENNIS;
    const season = this.$route.params.season;

    this.updateActives(sport, season);
  }

  public fetchData() {
    const tournamentData = this.getTournamentData();

    if (tournamentData && tournamentData.status) {
      this.error = false;
      this.data = this.getSanitizedData(tournamentData.data);

      return;
    }

    this.error = true;
  }

  public getSanitizedData(rawData: any): TournamentDataInterface {
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

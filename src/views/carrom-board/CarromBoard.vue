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
import { CARROM_BOARD_ROUTES } from '@/constants/routes';
import { getSanitizedData } from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { TournamentDataInterface } from '@/interfaces/interfaces';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class CarromBoard extends Vue {
  @Prop() public updateActives!: any;
  @Prop() public loadingData!: boolean;
  @Prop() public getTournamentData!: any;

  public data: any = {};
  public error: boolean = false;
  public routes: object = CARROM_BOARD_ROUTES;
  public fixtureLink: string = CARROM_BOARD_ROUTES.FIXTURE;

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
      this.data = getSanitizedData(tournamentData, 5);

      return;
    }

    this.error = true;
  }

  get title(): string {
    return `Carrom Board ${this.$route.params.season}`;
  }
}
</script>

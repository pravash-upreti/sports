<template>
  <loading-icon v-if="loadingData"/>
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="container">
    <sport-header
      :title="title"
      :categories="data.categories"
      :rounds="data.rounds"
      :routes="routes"
      :selected-sport="selectedSport"
    />
    <div class="tournament-content-wrapper">
      <router-view :data="data" :fixture-link="fixtureLink"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import sports from '@/constants/sports';
import { CARROM_BOARD_ROUTES } from '@/constants/routes';
import { getSanitizedData } from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class TableTennis extends Vue {
  @Prop() public updateActives!: any;
  @Prop() public selectedSport!: any;
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
    this.updateActiveSport();
  }

  public updated() {
    this.updateActiveSport();
  }

  public updateActiveSport() {
    const sport = sports.CARROM_BOARD;
    const season = this.$route.params.season;

    this.updateActives(sport, season);
  }

  public fetchData() {
    const sport = sports.CARROM_BOARD;
    const season = this.$route.params.season;
    const tournamentData = this.getTournamentData(sport, season);

    if (tournamentData && tournamentData.status) {
      this.error = false;
      this.data = getSanitizedData(tournamentData.data);

      return;
    }

    this.error = true;
  }

  get title(): string {
    return `Carrom Board ${this.$route.params.season}`;
  }
}
</script>

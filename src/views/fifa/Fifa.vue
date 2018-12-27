<template>
  <div v-if="loadingData">
    <loading-icon/>
  </div>
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else>
    <div class="container">
      <sport-header
        :title="title"
        :sub-title="subTitle"
        :categories="data.categories"
        :rounds="data.rounds"
        :routes="routes"
        :selected-sport="selectedSport"
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
import { FIFA_ROUTES } from '@/constants/routes';
import { getSanitizedData } from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class Fifa extends Vue {
  @Prop() public updateActives!: any;
  @Prop() public selectedSport!: any;
  @Prop() public loadingData!: boolean;
  @Prop() public getTournamentData!: any;

  public data: any = {};
  public error: boolean = false;
  public routes: object = FIFA_ROUTES;
  public fixtureLink: string = FIFA_ROUTES.FIXTURE;

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
    const sport = this.$route.params.sport;
    const season = sports.FIFA;

    this.updateActives(sport, season);
  }

  public fetchData() {
    const tournamentData = this.getTournamentData();

    if (tournamentData && tournamentData.status) {
      this.error = false;
      this.data = getSanitizedData(tournamentData.data);

      return;
    }

    this.error = true;
  }

  get title(): string {
    return sports.FIFA.toUpperCase();
  }

  get subTitle(): string {
    return this.$route.params.sport;
  }
}
</script>

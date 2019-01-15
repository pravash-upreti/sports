<template>
  <loading-icon v-if="loading" />
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="container">
    <SportHeader
      :title="title"
      :routes="routes"
      :selectedSportSeason="selectedSportSeason"
    />
    <div class="tournament-content-wrapper">
      <router-view :data="data" :fixture-link="fixtureLink"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import SPORTS from '@/constants/sports';
import { FUTSAL_ROUTES } from '@/constants/routes';
import { getSanitizedData } from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { fetchSportData } from '@/services/TournamentService';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class Futsal extends Vue {
  @Prop() public updateSelectedSport: any;

  public data: any = {};
  public error: boolean = false;
  public loading: boolean = false;
  public season: string|number = '';
  public routes: object = FUTSAL_ROUTES;
  public fixtureLink: string = FUTSAL_ROUTES.FIXTURE;

  public async created() {
    await this.fetchData();
  }

  public async beforeUpdate() {
    if (this.season.toString() !== this.$route.params.season.toString()) {
      await this.fetchData();
    }
  }

  public async fetchData() {
    if (this.loading) {
      return;
    }

    this.error = false;
    this.loading = true;

    try {
      this.season = this.$route.params.season;
      this.updateSelectedSport(SPORTS.FUTSAL);

      const response = await fetchSportData(SPORTS.FUTSAL, this.season);

      if (response && response.status) {
        this.data = getSanitizedData(response.data);

        return;
      }

      this.data = null;
      this.error = true;
    } catch (e) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  get title(): string {
    return `Futsal ${this.season}`;
  }

  get selectedSportSeason(): object {
    return {
      sport: SPORTS.FUTSAL,
      season: this.season
    };
  }
}
</script>

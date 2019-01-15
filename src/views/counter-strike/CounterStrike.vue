<template>
  <loading-icon v-if="loading" />
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="container">
    <SportHeader
      :title="title"
      :subTitle="subTitle"
      :categories="data.categories"
      :rounds="data.rounds"
      :routes="routes"
      :selectedSportSeason="selectedSportSeason"
    />
    <div class="tournament-content-wrapper">
      <router-view :data="data"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import SPORTS from '@/constants/sports';
import { COUNTER_STRIKE_ROUTES } from '@/constants/routes';
import { getSanitizedData } from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { fetchSportData } from '@/services/TournamentService';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class CounterStrike extends Vue {
  @Prop() public updateSelectedSport: any;

  public data: any = {};
  public sport: string = '';
  public error: boolean = false;
  public loading: boolean = false;
  public routes: object = COUNTER_STRIKE_ROUTES;

  public async created() {
    await this.fetchData();
  }

  public async beforeUpdate() {
    if (this.sport.toString() !== this.$route.params.sport.toString()) {
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
      this.sport = this.$route.params.sport;
      this.updateSelectedSport(SPORTS.COUNTER_STRIKE);

      const response = await fetchSportData(this.sport, SPORTS.COUNTER_STRIKE);

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

  get selectedSportSeason(): object {
    return {
      sport: this.sport,
      season: SPORTS.COUNTER_STRIKE
    };
  }

  get title(): string {
    return SPORTS.COUNTER_STRIKE.toUpperCase();
  }

  get subTitle(): string {
    return this.$route.params.sport ? `#${this.$route.params.sport}` : ``;
  }
}
</script>

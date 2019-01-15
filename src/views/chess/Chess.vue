<template>
  <LoadingIcon v-if="loading" />
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="container">
    <SportHeader
      :title="title"
      :categories="data.categories"
      :rounds="data.rounds"
      :routes="routes"
      :selectedSport="selectedSport"
    />
    <div class="tournament-content-wrapper">
      <router-view :data="data"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

import sports from '@/constants/sports';
import { CHESS_ROUTES } from '@/constants/routes';
import { getSanitizedData } from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { fetchSportData } from '@/services/TournamentService';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class Chess extends Vue {
  public data: any = {};
  public error: boolean = false;
  public loading: boolean = false;
  public routes: object = CHESS_ROUTES;

  public async created() {
    await this.fetchData();
  }

  // public async updated() {
  //   await this.fetchData();
  // }

  public async fetchData() {
    if (this.loading) {
      return;
    }

    this.error = false;
    this.loading = true;

    try {
      const response = await fetchSportData('chess', this.$route.params.season);

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
    return `Chess ${this.$route.params.season}`;
  }

  get selectedSport(): object {
    return {
      sport: sports.CHESS,
      season: this.$route.params.season
    };
  }
}
</script>

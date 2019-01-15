<template>
  <loading-icon v-if="loading" />
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="container">
    <sport-header
      :title="title"
      :subTitle="subTitle"
      :categories="data.categories"
      :rounds="data.rounds"
      :routes="routes"
      :selectedSportSeason="selectedSportSeason"
      :updateDataByCategoryId="updateDataByCategoryId"
    />
    <div class="tournament-content-wrapper">
      <router-view :data="data"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash';
import { Component, Vue, Prop } from 'vue-property-decorator';

import SPORTS from '@/constants/sports';
import { FIFA_ROUTES } from '@/constants/routes';
import { getFilteredData } from '@/services/FixtureService';
import { getCategoryById } from '@/services/CategoryService';
import { getSanitizedData } from '@/services/FixtureService';
import { fetchSportData } from '@/services/TournamentService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import SportHeader from '@/components/common/sport-header/SportHeader.vue';

@Component({
  components: { SportHeader, LoadingIcon }
})
export default class Fifa extends Vue {
  @Prop() public updateSelectedSport: any;

  public data: any = {};
  public fixedData: any = {};
  public sport: string = '';
  public error: boolean = false;
  public loading: boolean = false;
  public routes: object = FIFA_ROUTES;

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
      this.updateSelectedSport(SPORTS.FIFA);

      const response = await fetchSportData(this.sport, SPORTS.FIFA);

      if (response && response.status) {
        this.data = getSanitizedData(response.data);
        this.fixedData = cloneDeep(this.data);

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

  public updateDataByCategoryId(categoryId: number) {
    const category = getCategoryById(this.fixedData.categories, categoryId);

    this.data = getFilteredData(cloneDeep(this.fixedData), { category });
  }

  get selectedSportSeason(): object {
    return {
      sport: this.sport,
      season: SPORTS.FIFA
    };
  }

  get title(): string {
    return SPORTS.FIFA.toUpperCase();
  }

  get subTitle(): string {
    return this.$route.params.sport ? `#${this.$route.params.sport}` : ``;
  }
}
</script>

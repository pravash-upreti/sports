<template>
  <loading-icon v-if="loadingData" />
  <div v-else-if="error" class="container">
    <div class="alert alert-error">Unable to load data. Please try again later.</div>
  </div>
  <div v-else class="container">
    <sport-header
      :title="title"
      :sub-title="subTitle"
      :categories="data.categories"
      :rounds="data.rounds"
      :routes="routes"
      :selected-sport="selectedSport"
      :update-data-by-category-id="updateDataByCategoryId"
    />
    <div class="tournament-content-wrapper">
      <router-view :data="data" :fixture-link="fixtureLink"/>
    </div>
  </div>
</template>

<script lang="ts">
import { cloneDeep } from 'lodash';
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

import sports from '@/constants/sports';
import { FIFA_ROUTES } from '@/constants/routes';
import { getFilteredData } from '@/services/FixtureService';
import { getCategoryById } from '@/services/CategoryService';
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
  public fixedData: any = {};
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
    const sport = this.$route.params.sport;
    const season = sports.FIFA;
    const tournamentData = this.getTournamentData(sport, season);

    if (tournamentData && tournamentData.status) {
      this.error = false;
      this.data = getSanitizedData(tournamentData.data);
      this.fixedData = cloneDeep(this.data);

      return;
    }

    this.error = true;
  }

  public updateDataByCategoryId(categoryId: number) {
    const category = getCategoryById(this.fixedData.categories, categoryId);

    this.data = getFilteredData(cloneDeep(this.fixedData), { category });
  }

  get title(): string {
    return sports.FIFA.toUpperCase();
  }

  get subTitle(): string {
    return `#${this.$route.params.sport}`;
  }
}
</script>

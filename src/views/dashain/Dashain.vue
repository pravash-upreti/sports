<template>
  <div>
    <div 
      v-if="loading"
      class="container" 
    >
      <loading-icon />
    </div>
    <div 
      v-else-if="error"
      class="container" 
    >
      <div class="alert alert-error">Unable to load data. Please try again later.</div>
    </div>
    <div 
      v-else
      class="futsal"
    >
      <div class="tournament-content">
        <div class="container-fluid">
          <sub-header />
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';

import EventBus from '@/events/eventBus';
import SubHeader from './partials/SubHeader.vue';
import * as FixtureService from '@/services/FixtureService';
import LoadingIcon from '@/components/common/LoadingIcon.vue';
import { TournamentDataInterface, TournamentDataResponseInterface } from '@/interfaces/interfaces';

@Component({
  components: { SubHeader, LoadingIcon }
})
export default class Dashain extends Vue {
  public error: boolean = false;
  public loading: boolean = true;
  public fixtureLink: string = '';
  public data: TournamentDataInterface | null = null;

  public created() {
    EventBus.$emit('change-logo-title', 'Dashain Cup');

    this.fetchData();
  }

  public fetchData() {
    axios
      .get(process.env.VUE_APP_API_DASHAIN_CUP)
      .then((response) => {
        this.data = this.getSanitizedData(response.data.data);

        EventBus.$emit('change-logo-title', this.data.details.title, this.data.details.year);
      })
      .catch(() => {
        this.error = true;
      })
      .then(() => {
        this.loading = false;
      });
  }

  public getSanitizedData(rawData: TournamentDataResponseInterface): TournamentDataInterface {
    const data = {
      teams: rawData.teams,
      points: rawData.table,
      details: rawData.details,
      stats: rawData.stats || [],
      recents: FixtureService.getRecentFixtures(rawData),
      results: FixtureService.getResults(rawData.fixtures),
      fixtures: FixtureService.getFixtures(rawData.fixtures)
    };

    return data;
  }
}
</script>

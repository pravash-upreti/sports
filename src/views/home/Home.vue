<template>
  <div class="container">
    <div class="home-wrapper">
      <p class="home-title">Welcome to Sports!</p>
      <div v-if="error" class="home-content-wrapper">
        <p class="home-sub-title">Oops...something went wrong. Try again later!</p>
      </div>
      <div v-else-if="loading" class="home-content-wrapper">
        <p class="home-sub-title">Hangon...fetching...</p>
        <LoadingIcon />
      </div>
      <div v-else class="home-content-wrapper">
        <TournamentsShort title="Current ongoing tournaments" :competitions="this.recentTournaments.current" />
        <TournamentsShort title="Upcoming tournaments" :competitions="this.recentTournaments.upcoming" />
        <TournamentsShort title="Past tournaments" :competitions="this.recentTournaments.past" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import LoadingIcon from '@/components/common/LoadingIcon.vue';
import TournamentsShort from './partials/TournamentsShort.vue';
import { RecentTournamentsInterface } from '@/interfaces/interfaces';
import { fetchTournamentsList, getRecentTournaments } from '@/services/TournamentService';

@Component({
  components: { LoadingIcon, TournamentsShort }
})
export default class Home extends Vue {
  private error: boolean = false;
  private loading: boolean = true;
  private recentTournaments: RecentTournamentsInterface = {
    current: [],
    upcoming: [],
    past: []
  };

  public created() {
    this.fetchData();
  }

  private async fetchData() {
    const tournaments = await fetchTournamentsList();
    this.recentTournaments = getRecentTournaments(tournaments);

    if (!this.recentTournaments) {
      this.error = true;
    }

    this.loading = false;
  }
}
</script>

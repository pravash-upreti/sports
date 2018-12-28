<template>
  <div id="app">
    <div :class="['main-wrapper container-fluid', activeSport]">
      <!-- Only on mobile -->
      <top-nav-bar :showSideBar="showSideBar" :showHideSideBar="showHideSideBar"/>
      <side-bar :classes="sideBarClassObject" :showHideSideBar="showHideSideBar"/>
      <div class="content-wrapper">
        <router-view
          :loading-data="loading"
          :selected-sport="selectedSport"
          :update-actives="updateActives"
          :get-tournament-data="getTournamentData"
          :fetch-tournament-data="fetchTournamentData"
        />
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import './assets/sass/style.scss'
</style>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Component, Vue, Watch } from 'vue-property-decorator';

import sports from '@/constants/sports';
import SideBar from '@/components/navigations/SideBar.vue';
import { fetchSportData } from '@/services/TournamentService';
import TopNavBar from '@/components/navigations/TopNavBar.vue';

@Component({
  components: { SideBar, TopNavBar }
})
export default class App extends Vue {
  public loading: boolean = true;
  public activeSport: string = '';
  public tournamentData: any = {};
  public showSideBar: boolean = false;
  public activeSeason: string | number = '';

  @Watch('activeSport', { immediate: true, deep: true })
  public onActiveSportChanged(newVal: string, oldVal: string) {
    if (newVal !== oldVal) {
      this.activeSport = newVal;

      this.fetchTournamentData(this.activeSport, this.activeSeason);
    }
  }

  @Watch('activeSeason', { immediate: true, deep: true })
  public onActiveSeasonChanged(newVal: string, oldVal: string) {
    if (newVal !== oldVal) {
      this.activeSeason = newVal;

      this.fetchTournamentData(this.activeSport, this.activeSeason);
    }
  }

  public getTournamentData(activeSport: string = this.activeSport, activeSeason: string | number = this.activeSeason) {
    return this.tournamentData[`${activeSport}-${activeSeason}`];
  }

  public setTournamentData(sport: string, season: string | number, data: any) {
    this.tournamentData[`${sport}-${season}`] = data;
  }

  public showHideSideBar(show: boolean = false) {
    this.showSideBar = show;
  }

  public updateActives(sport: string, season: string | number) {
    if (!!sport) {
      this.activeSport = sport;
    }

    if (!!season) {
      this.activeSeason = season;
    }
  }

  public fetchTournamentData(activeSport: string, activeSeason: string|number) {
    if (!activeSport || !activeSeason) {
      return;
    }

    this.loading = true;
    let data: any = this.getTournamentData();

    // Check if data already exists.
    if (data && data.status && Object.keys(data.data).length) {
      this.loading = false;
      this.setTournamentData(activeSport, activeSeason, data);

      return;
    }

    fetchSportData(activeSport, activeSeason)
      .then((response: any) => {
        if (response && response.data && response.data.status) {
          data = response.data;
        }
      })
      .catch()
      .then(() => {
        this.loading = false;
        this.setTournamentData(activeSport, activeSeason, data);
      });
  }

  get sideBarClassObject() {
    if (!this.showSideBar) {
      return {
        'slide-out': true
      };
    }

    return {
      'slide-in': true
    };
  }

  get selectedSport() {
    return {
      sport: this.activeSport,
      season: this.activeSeason
    };
  }
}
</script>


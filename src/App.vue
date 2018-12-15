<template>
  <div id="app">
    <div class="main-wrapper container-fluid">
      <!-- Only on mobile -->
      <top-nav-bar :showSideBar="showSideBar" :showHideSideBar="showHideSideBar"/>
      <side-bar :classes="sideBarClassObject" :showHideSideBar="showHideSideBar"/>
      <div class="content-wrapper">
        <keep-alive>
          <router-view
            :loading-data="loading"
            :update-actives="updateActives"
            :get-tournament-data="getTournamentData"
            :fetch-tournament-data="this.fetchTournamentData"
          />
        </keep-alive>
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

import SideBar from '@/components/navigations/SideBar.vue';
import { fetchSportData } from '@/services/TournamentService';
import TopNavBar from '@/components/navigations/TopNavBar.vue';

@Component({
  components: { SideBar, TopNavBar }
})
export default class App extends Vue {
  public activeSport: string = '';
  public activeSeason: string | number = '';
  public tournamentData: any = {};
  public showSideBar: boolean = false;
  public loading: boolean = true;

  @Watch('activeSport', { immediate: true, deep: true })
  public onActiveSportChanged(newVal: string, oldVal: string) {
    if (newVal !== oldVal) {
      this.activeSport = newVal;

      this.fetchTournamentData();
    }
  }

  @Watch('activeSeason', { immediate: true, deep: true })
  public onActiveSeasonChanged(newVal: string, oldVal: string) {
    if (newVal !== oldVal) {
      this.activeSeason = newVal;

      this.fetchTournamentData();
    }
  }

  public getTournamentData() {
    return this.tournamentData[`${this.activeSport}-${this.activeSeason}`];
  }

  public setTournamentData(sport: string, season: string|number, data: any) {
    this.tournamentData[`${sport}-${season}`] = data;
  }

  public showHideSideBar(show: boolean = false) {
    this.showSideBar = show;
  }

  public updateActives(sport: string, season: string|number) {
    if (!!sport) {
      this.activeSport = sport;
    }

    if (!!season) {
      this.activeSeason = season;
    }
  }

  public fetchTournamentData() {
    if (!this.activeSport || !this.activeSeason) {
      return;
    }

    this.loading = true;
    let data: any = null;

    fetchSportData(this.activeSport, this.activeSeason)
      .then((response: any) => {
        if (response && response.data && response.data.status) {
          data = response.data;
        }
      })
      .catch()
      .then(() => {
        this.loading = false;
        this.setTournamentData(this.activeSport, this.activeSeason, data);
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
}
</script>


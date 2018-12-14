<template>
  <div id="app">
    <div class="main-wrapper container-fluid">
      <!-- Only on mobile -->
      <TopNavBar :showSideBar="showSideBar" :showHideSideBar="showHideSideBar"/>
      <SideBar :classes="sideBarClassObject" :showHideSideBar="showHideSideBar"/>
      <div class="content-wrapper">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import './assets/sass/style.scss'
</style>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Component, Vue } from 'vue-property-decorator';

import SideBar from '@/components/navigations/SideBar.vue';
import { fetchSportData } from '@/services/TournamentService';
import TopNavBar from '@/components/navigations/TopNavBar.vue';

@Component({
  components: { SideBar, TopNavBar }
})
export default class App extends Vue {
  public tournamentData: any = {};
  public showSideBar: boolean = false;

  public getTournamentData(sport: string, season: string) {
    return this.tournamentData[`${sport}-${season}`];
  }

  public setTournamentData(sport: string, season: string, data: any) {
    this.tournamentData[`${sport}-${season}`] = data;
  }

  public showHideSideBar(show: boolean = false) {
    this.showSideBar = show;
  }

  public fetchTournamentData(sport: string, season: string) {
    return fetchSportData(sport, season);
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


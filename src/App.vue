<template>
  <div id="app">
    <div class="main-wrapper container-fluid">
      <!-- Only on mobile -->
      <TopNavBar :showSideBar="showSideBar" :showHideSideBar="showHideSideBar"/>
      <SideBar :classes="sideBarClassObject" :showHideSideBar="showHideSideBar"/>
      <div class="content-wrapper">This is insane.
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
import TopNavBar from '@/components/navigations/TopNavBar.vue';

@Component({
  components: { SideBar, TopNavBar }
})
export default class App extends Vue {
  public data: object = {};
  public showSideBar: boolean = false;

  public showHideSideBar(show: boolean = false) {
    this.showSideBar = show;
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


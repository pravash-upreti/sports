<template>
  <div id="app">
    <div class="main-wrapper">
      <NavBar/>
      <router-view/>
    </div>
  </div>
</template>

<style lang="sass">
@import './assets/sass/style.scss'
</style>

<script lang="ts">
import '@fortawesome/fontawesome-free/css/all.css';
import { Component, Vue } from 'vue-property-decorator';

import NavBar from '@/components/navigations/NavBar.vue';

@Component({
  components: {
    NavBar
  }
})
export default class Home extends Vue {
}
</script>


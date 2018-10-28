<template>
  <div id="app">
    <div class="main-wrapper">
      <NavBar/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<style lang="sass">
@import './assets/sass/style.scss'
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/components/footer/Footer.vue';
import NavBar from '@/components/navigations/NavBar.vue';

@Component({
  components: {
    Footer,
    NavBar
  }
})
export default class Home extends Vue {
}
</script>


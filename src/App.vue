<template>
  <div id="app">
    <div class="main-wrapper">
      <NavBar />
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<style lang="sass">
@import './assets/sass/style.scss';
</style>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

import Footer from './components/footer/Footer';
import NavBar from './components/navigations/NavBar';

export default {
  name: 'App',
  components: { NavBar, Footer }
};
</script>

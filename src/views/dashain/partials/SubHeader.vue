<template>
  <div id="subHeader" class="sub-header-wrapper">
    <div class="sub-header">
      <ul class="nav nav--secondary container">
        <li>
          <router-link
            :to="futsalRoutes.HOME"
            exact-active-class="active"
            exact
          >Home
          </router-link>
        </li>
        <li>
          <router-link
            :to="futsalRoutes.RESULTS"
            exact-active-class="active"
            exact
          >Results
          </router-link>
        </li>
        <li>
          <router-link
            :to="futsalRoutes.FIXTURES"
            exact-active-class="active"
            exact
          >Fixtures
          </router-link>
        </li>
        <li>
          <router-link
            :to="futsalRoutes.POINTS"
            exact-active-class="active"
            exact
          >Points
          </router-link>
        </li>
        <li>
          <router-link
            :to="futsalRoutes.STATS"
            exact-active-class="active"
            exact
          >Stats
          </router-link>
        </li>
        <li>
          <router-link
            :to="futsalRoutes.TEAMS"
            exact-active-class="active"
            exact
          >Teams
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import { OTHER_GAMES_ROUTES } from '../../../constants/routes';

  @Component
  export default class SubHeader extends Vue {
    private futsalRoutes: object = Object.freeze(OTHER_GAMES_ROUTES.DASHAIN_CUP);
    private header: any;
    private stickyOffset: any;

    public mounted() {
      this.header = document.getElementById('subHeader');
      this.stickyOffset = this.header.offsetTop;

      window.onscroll = this.handleScroll();
    }

    public handleScroll() {
      return this.updateOffset;
    }

    private updateOffset() {
      if (window.pageYOffset > this.stickyOffset) {
        this.header.classList.add('sticky');
      } else {
        this.header.classList.remove('sticky');
      }
    }
  }
</script>

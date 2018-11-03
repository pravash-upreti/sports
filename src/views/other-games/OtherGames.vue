<template>
  <div class="other-games">
    <div v-if="showCupsList" class="container text-center">
      <router-link
        v-on:click.native="toggleContentView"
        :to="baseRoutes.OTHERS_DASHAIN_CUP"
      >
        <div class="game-card game-card-cup">
          <h3 class="title">Dashain Cup</h3>
          <div class="description">2018</div>
        </div>
      </router-link>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import { BASE_ROUTES } from '@/constants/routes';

@Component
export default class OtherGames extends Vue {
  private currentRoute: string = '';
  private showCupsList: boolean = true;
  private baseRoutes: object = Object.freeze(BASE_ROUTES);

  private mounted() {
    this.toggleContentView();
  }

  private updated() {
    this.toggleContentView();
  }

  private toggleContentView() {
    this.showCupsList = this.$route.path === BASE_ROUTES.OTHERS;
  }
}
</script>

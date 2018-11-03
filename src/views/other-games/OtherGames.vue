<template>
  <div class="other-games">
    <div v-if="showCupsList">
      <games-list :routes="otherGameRoutes" :toggle-content-view="toggleContentView" />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import EventBus from '@/events/eventBus';
import { BASE_ROUTES } from '@/constants/routes';
import GamesList from './partials/GamesList.vue';

@Component({
  components: { GamesList }
})
export default class OtherGames extends Vue {
  private currentRoute: string = '';
  private showCupsList: boolean = true;
  private otherGameRoutes: object[] = [];
  private baseRoutes: object = Object.freeze(BASE_ROUTES);

  private created() {
    this.otherGameRoutes = [
      {
        name: 'Dashain Cup',
        description: '2018',
        path: BASE_ROUTES.OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP
      }
    ];
  }

  private mounted() {
    this.toggleContentView();
  }

  private updated() {
    this.toggleContentView();
  }

  private toggleContentView() {
    this.showCupsList = this.$route.path === BASE_ROUTES.OTHERS;

    if (this.showCupsList) {
      EventBus.$emit('change-logo-title', 'Other games');
    }
  }
}
</script>

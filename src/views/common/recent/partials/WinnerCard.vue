<template>
  <div class="winner-card-wrapper">
    <div v-if="winner.name" class="winner-card">
      <h3 v-if="showCategory" class="winner-card-category-name">{{ winner.category }}</h3>
      <div class="winner-card-participant-logo-wrapper">
        <TeamLogo :team="winner"/>
      </div>
      <h2 class="winner-card-name">{{ winner.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import TeamLogo from '@/components/common/team-logo/TeamLogo.vue';

@Component({
  components: { TeamLogo }
})
export default class WinnerCard extends Vue {
  @Prop({ default: false }) private isWinner!: boolean;
  @Prop({ default: { name: '' } }) private winner!: any;
  @Prop({ default: false }) private showCategory!: boolean;

  get isGrouped(): boolean {
    return !!(this.winner && this.winner.players && this.winner.players.length);
  }
}
</script>

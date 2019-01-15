<template>
  <div class="winner-card-wrapper">
    <div v-if="winner.name" class="winner-card">
      <h3 v-if="showCategory" class="winner-card-category-name">{{ winner.category }}</h3>
      <div
        v-if="isGrouped"
        :class="['winner-card-participant-logo-wrapper team-grouped', isWinner ? 'team-winner' : '']"
      >
        <ParticipantLogo
          v-for="(player, index) in winner.players"
          :key="index"
          :participant="player"
        />
        <i class="fa fa-trophy winner-card-medal"></i>
      </div>
      <div v-else class="winner-card-participant-logo-wrapper">
        <ParticipantLogo :participant="winner" />
      </div>
      <h2 class="winner-card-name">{{ winner.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import ParticipantLogo from '@/components/common/ParticipantLogo.vue';

@Component({
  components: { ParticipantLogo }
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

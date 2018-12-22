<template>
  <div class="container">
    <div class="stats-wrapper">
      <stat
        v-if="goalsStats.players.length"
        :stat="goalsStats"
      />
      <stat
        v-if="yellowCardsStats.players.length"
        :stat="yellowCardsStats"
      />
      <stat
        v-if="redCardsStats.players.length"
        :stat="redCardsStats"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Stat from './partials/Stat.vue';
import { footballIcon, redCardIcon, yellowCardIcon } from '@/assets/images';

@Component({
  components: { Stat }
})
export default class FutsalStats extends Vue {
  @Prop() private data!: any;

  get goalsStats() {
    return {
      title: 'Goals',
      icon: footballIcon,
      players: this.data.stats.goals
    };
  }

  get yellowCardsStats() {
    return {
      title: 'Yellow Cards',
      icon: yellowCardIcon,
      players: this.data.stats.yellowCards
    };
  }

  get redCardsStats() {
    return {
      title: 'Red Cards',
      icon: redCardIcon,
      players: this.data.stats.redCards
    };
  }
}
</script>

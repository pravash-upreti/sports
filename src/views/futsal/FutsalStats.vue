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

<script>
import { footballIcon, redCardIcon, yellowCardIcon } from '../../assets/images';

import Stat from './partials/Stat';

export default {
  name: 'FutsalStats',
  components: { Stat },
  data: function() {
    return {
      stats: this.$parent.data.stats
    };
  },
  computed: {
    goalsStats: function() {
      return {
        title: 'Goals',
        icon: footballIcon,
        players: this.stats.goals
      };
    },

    yellowCardsStats: function() {
      return {
        title: 'Yellow Cards',
        icon: yellowCardIcon,
        players: this.stats.yellowCards
      };
    },

    redCardsStats: function() {
      return {
        title: 'Red Cards',
        icon: redCardIcon,
        players: this.stats.redCards
      };
    }
  }
};
</script>

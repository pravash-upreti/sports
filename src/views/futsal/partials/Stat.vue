<template>
  <div class="stats-col">
    <h4 class="stats-title">
      <img 
        v-if="stat.icon"
        :src="stat.icon"
        class="stat-image-logo"
        alt=""
      >
      {{ stat.title }}
    </h4>
    <ul>
      <li
        v-for="(player, index) in stat.players"
        :key="index"
      >
        <span class="stat-player-name">
          <team-logo :participant="player" />
          {{ player.name }}
        </span>
        <span class="stat-player-stat">
          {{ player.count }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import TeamLogo from '../../../components/common/TeamLogo';

export default {
  components: { TeamLogo },
  props: {
    stat: {
      type: Object,
      required: true,
      default: function() {
        return {
          title: '',
          icon: null,
          players: []
        };
      }
    }
  }
};
</script>

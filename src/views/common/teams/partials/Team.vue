<template>
  <div class="team">
    <div 
      v-if="team.logo"
      class="team-title"
    >
      <h4>
        <team-logo 
          :participant="team"
          :custom-styles="customStyles"
        />
        {{ team.name }}
      </h4>
    </div>
    <div class="team-players-wrapper">
      <ul>
        <li
          v-for="(player, index) in team.players"
          :key="index"
        >
          <team-logo
            :participant="player"
            :custom-styles="customStyles"
          />
          {{ player.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TeamLogo from '../../../../components/common/TeamLogo';

export default {
  name: 'Team',
  components: { TeamLogo },
  props: {
    team: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    customStyles: function() {
      if (this.team.logo) {
        return {
          color: this.team.logo.color,
          backgroundColor: this.team.logo.backgroundColor
        };
      }

      return {};
    }
  }
};
</script>

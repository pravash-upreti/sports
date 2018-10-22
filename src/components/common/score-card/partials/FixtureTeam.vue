<template>
  <div :class="classObject">
    <div class="team-name-wrapper">
      <h2
        v-if="isAwayTeam"
        :class="teamClassObject"
      >
        <span
          v-if="isGrouped"
          class="participant-logo-wrapper"
        >
          <team-logo
            v-for="(player, index) in team.players"
            :key="index"
            :participant="player"
            :custom-styles="teamCustomStyles"
          />
        </span>
        <span
          v-else
          class="participant-logo-wrapper"
        >
          <team-logo
            :participant="team"
            :custom-styles="teamCustomStyles"
          />
        </span>
        {{ team.name }}
      </h2>
      <h2
        v-else
        :class="teamClassObject"
      >
        {{ team.name }}
        <span
          v-if="isGrouped"
          class="participant-logo-wrapper"
        >
          <team-logo
            v-for="(player, index) in team.players"
            :key="index"
            :participant="player"
            :custom-styles="teamCustomStyles"
          />
        </span>
        <span
          v-else
          class="participant-logo-wrapper"
        >
          <team-logo
            :participant="team"
            :custom-styles="teamCustomStyles"
          />
        </span>
      </h2>
    </div>
  </div>
</template>

<script>
import TeamLogo from '../../TeamLogo';

export default {
  name: 'FixtureTeam',
  components: { TeamLogo },
  props: {
    team: {
      type: Object,
      default: function() {
        return {};
      }
    },
    isAwayTeam: {
      type: Boolean,
      default: false
    },
    classNames: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    isGrouped: function() {
      return !!this.team.players;
    },

    classObject: function() {
      return Object.assign(
        {
          'team-info': true
        },
        this.classNames
      );
    },

    teamClassObject: function() {
      return {
        'team-name': true,
        'team-grouped': this.isGrouped
      };
    },

    teamCustomStyles: function() {
      let customStyles = {
        margin: '0 8px'
      };

      if (this.team.logo) {
        customStyles = Object.assign(customStyles, {
          color: this.team.logo.color,
          backgroundColor: this.team.logo.backgroundColor
        });
      }

      return customStyles;
    }
  }
};
</script>

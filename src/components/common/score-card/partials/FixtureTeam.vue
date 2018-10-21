<template>
  <div :class="classObject">
    <div class="team-name-wrapper">
      <h2 :class="teamClassObject">
        {{ team.name }}
        <span class="participant-logo-wrapper">
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
    classNames: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data: function() {
    return {
      isGrouped: false
    };
  },
  computed: {
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
  },
  created: function() {
    this.isGrouped = !!this.team.players;
  }
};
</script>

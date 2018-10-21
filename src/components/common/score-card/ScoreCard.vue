<template>
  <div class="score-card-wrapper">
    <router-link 
      v-if="fixtureLink.length" 
      :key="fixture.id"
      :to="fixtureURL"
    >
      <div class="score-card">
        <div class="score-brief">
          <fixture-team 
            :team="fixture.homeTeam" 
            :class-names="homeTeamClassObject" 
          />
          <fixture-score :fixture="fixture" />
          <fixture-team
            :team="fixture.awayTeam"
            :class-names="awayTeamClassObject"
          />
        </div>
      </div>
    </router-link>
    <div 
      v-else 
      class="score-card"
    >
      <div class="score-brief">
        <fixture-team
          :team="fixture.homeTeam" 
          :class="homeTeamClassObject" 
        />
        <fixture-score :fixture="fixture" />
        <fixture-team 
          :team="fixture.awayTeam" 
          :class="awayTeamClassObject" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import FixtureTeam from './partials/FixtureTeam';
import FixtureScore from './partials/FixtureScore';

export default {
  components: { FixtureTeam, FixtureScore },
  props: {
    fixture: {
      type: Object,
      default: function() {
        return {};
      }
    },
    fixtureLink: {
      type: String,
      default: ''
    }
  },
  computed: {
    homeTeamClassObject: function() {
      const isHomeTeamWinner =
        this.fixture.status.toLowerCase() === 'played'
          ? this.fixture.homeTeamScore > this.fixture.awayTeamScore
          : false;

      return {
        'home-team': true,
        'text-right': true,
        winner: isHomeTeamWinner
      };
    },

    awayTeamClassObject: function() {
      const isAwayTeamWinner =
        this.fixture.status.toLowerCase() === 'played'
          ? this.fixture.awayTeamScore > this.fixture.homeTeamScore
          : false;

      return {
        'away-team': true,
        'text-right': true,
        winner: isAwayTeamWinner
      };
    },

    fixtureURL: function() {
      if (!this.fixtureLink.length) {
        return '';
      }

      return this.fixtureLink.replace(':fixtureId', this.fixture.id);
    }
  }
};
</script>

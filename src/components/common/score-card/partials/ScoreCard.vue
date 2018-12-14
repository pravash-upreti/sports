<template>
  <div class="score-card-wrapper">
    <div class="score-card">
      <fixture-team
        :team="fixture.homeTeam"
        :class-names="homeTeamClassObject"
        :is-home-team-winner="isHomeTeamWinner"
        :is-away-team-winner="isAwayTeamWinner"
      />
      <fixture-score :fixture="fixture" />
      <fixture-team
        :team="fixture.awayTeam"
        :is-away-team="true"
        :class-names="awayTeamClassObject"
        :is-home-team-winner="isHomeTeamWinner"
        :is-away-team-winner="isAwayTeamWinner"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import FixtureTeam from './FixtureTeam.vue';
import FixtureScore from './FixtureScore.vue';
import { FixtureInterface } from '@/interfaces/interfaces';

@Component({
  components: { FixtureTeam, FixtureScore }
})
export default class ScoreCard extends Vue {
  @Prop() public fixtureLink!: string;
  @Prop() public fixture!: FixtureInterface;

  get isHomeTeamWinner() {
    return this.fixture.status.toLowerCase() === 'played'
        ? this.fixture.homeTeamScore > this.fixture.awayTeamScore
        : false;
  }

  get isAwayTeamWinner() {
    return this.fixture.status.toLowerCase() === 'played'
        ? this.fixture.awayTeamScore > this.fixture.homeTeamScore
        : false;
  }

  get homeTeamClassObject(): object {
    const isHomeTeamWinner =
      this.fixture.status.toLowerCase() === 'played'
        ? this.fixture.homeTeamScore > this.fixture.awayTeamScore
        : false;

    return {
      'home-team': true,
      'winner': isHomeTeamWinner
    };
  }

  get awayTeamClassObject(): object {
    const isAwayTeamWinner =
      this.fixture.status.toLowerCase() === 'played'
        ? this.fixture.awayTeamScore > this.fixture.homeTeamScore
        : false;

    return {
      'away-team': true,
      'winner': isAwayTeamWinner
    };
  }
}
</script>

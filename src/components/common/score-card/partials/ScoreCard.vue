<template>
  <div class="score-card-wrapper">
    <div class="score-card">
      <div class="score-brief">
        <fixture-team 
          :team="fixture.homeTeam"
          :class-names="homeTeamClassObject"
        />
        <fixture-score :fixture="fixture" />
        <fixture-team
          :team="fixture.awayTeam"
          :is-away-team="true"
          :class-names="awayTeamClassObject"
        />
      </div>
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

  get homeTeamClassObject(): object {
    const isHomeTeamWinner =
      this.fixture.status.toLowerCase() === 'played'
        ? this.fixture.homeTeamScore > this.fixture.awayTeamScore
        : false;

    return {
      'home-team': true,
      'text-right': true,
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
      'text-right': true,
      'winner': isAwayTeamWinner
    };
  }
}
</script>

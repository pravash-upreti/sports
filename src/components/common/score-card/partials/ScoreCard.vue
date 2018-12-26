<template>
  <div class="score-card-wrapper">
    <div class="score-card score-card--mobile">
      <fixture-details-mobile :fixture="fixture" />
      <fixture-team-mobile
        :team="fixture.homeTeam"
        :score="fixture.homeTeamScore"
        :is-winner="isHomeTeamWinner"
      />
      <fixture-team-mobile
        :team="fixture.awayTeam"
        :score="fixture.awayTeamScore"
        :is-winner="isAwayTeamWinner"
      />
    </div>
    <!-- <div class="score-card score-card--desktop">
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
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import FixtureTeam from './FixtureTeam.vue';
import FixtureScore from './FixtureScore.vue';
import FixtureTeamMobile from './FixtureTeamMobile.vue';
import { FixtureInterface } from '@/interfaces/interfaces';
import { isFixturePlayed } from '@/services/FixtureService';
import FixtureDetailsMobile from './FixtureDetailsMobile.vue';

@Component({
  components: { FixtureTeam, FixtureScore, FixtureTeamMobile, FixtureDetailsMobile }
})
export default class ScoreCard extends Vue {
  @Prop() public fixtureLink!: string;
  @Prop() public fixture!: FixtureInterface;

  get isFixturePlayed() {
    return isFixturePlayed(this.fixture);
  }

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

<template>
  <div class="score-card-wrapper">
    <div class="score-card score-card--mobile" @click="showFixtureModal">
      <FixtureDetailsMobile :fixture="fixture" />
      <FixtureTeamMobile
        :team="fixture.homeTeam"
        :score="fixture.homeTeamScore"
        :isWinner="isHomeTeamWinner"
      />
      <FixtureTeamMobile
        :team="fixture.awayTeam"
        :score="fixture.awayTeamScore"
        :isWinner="isAwayTeamWinner"
      />
    </div>
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
  @Prop() public triggerShowModal!: any;
  @Prop() public fixture!: FixtureInterface;

  public showFixtureModal() {
    this.triggerShowModal(true, this.fixture);
  }

  get isFixturePlayed() {
    return isFixturePlayed(this.fixture);
  }

  get isHomeTeamWinner() {
    if (isFixturePlayed(this.fixture)) {
      if (this.fixture.winnerTeam) {
        return this.fixture.winnerTeam.id === this.fixture.homeTeam.id;
      } else {
        return this.fixture.homeTeamScore > this.fixture.awayTeamScore;
      }
    }

    return false;
  }

  get isAwayTeamWinner() {
    if (isFixturePlayed(this.fixture)) {
      if (this.fixture.winnerTeam) {
        return this.fixture.winnerTeam.id === this.fixture.awayTeam.id;
      } else {
        return this.fixture.awayTeamScore > this.fixture.homeTeamScore;
      }
    }

    return false;
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

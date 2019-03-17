<template>
  <div
    class="score-card score-card--mobile"
    :class="{ 'score-card--cancelled': isFixtureCancelled }"
    @click="showFixtureModal"
  >
    <FixtureDetailsMobile v-if="showDetails" :fixture="fixture"/>
    <FixtureTeamMobile
      :showFullName="showFullName"
      :team="fixture.homeTeam"
      :score="fixture.homeTeamScore"
      :isWinner="isHomeTeamWinner"
    />
    <FixtureTeamMobile
      :showFullName="showFullName"
      :team="fixture.awayTeam"
      :score="fixture.awayTeamScore"
      :isWinner="isAwayTeamWinner"
    />
  </div>
</template>

<script lang="ts">
import { FixtureInterface } from '@/interfaces/interfaces';
import { Vue, Component, Prop } from 'vue-property-decorator';

import FixtureTeamMobile from './FixtureTeamMobile.vue';
import FixtureDetailsMobile from './FixtureDetailsMobile.vue';
import { isFixturePlayed, isFixtureCancelled } from '@/services/FixtureService';

@Component({
  components: { FixtureTeamMobile, FixtureDetailsMobile }
})
export default class ScoreCardMobile extends Vue {
  @Prop() public showFixtureModal!: any;
  @Prop() public fixture!: FixtureInterface;
  @Prop({ default: true }) public showDetails!: boolean;
  @Prop({ default: true }) public showFullName!: boolean;

  get isFixtureCancelled() {
    return isFixtureCancelled(this.fixture);
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
}
</script>

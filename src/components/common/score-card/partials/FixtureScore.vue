<template>
  <div v-if="fixture" class="fixture-score-wrapper">
    <div v-if="isFixtureCancelled" class="result result--versus">Cancelled</div>
    <div v-else-if="isFixturePlayed" class="result">
      <span :class="getWinnerClassObject('home')">{{ fixture.homeTeamScore }}</span>
      <span>:</span>
      <span :class="getWinnerClassObject('away')">{{ fixture.awayTeamScore }}</span>
      <p
        v-if="fixture.round && fixture.categoryType"
        class="fixture-round"
      >{{ fixture.round }} - {{ fixture.categoryType }}</p>
    </div>
    <div v-else class="result result--versus">
      <p class="fixture-date">{{ fixtureDate.date }}</p>
      <p class="fixture-time">{{ fixtureDate.time }}</p>
      <p class="fixture-round">{{ fixture.round }} - {{ fixture.categoryType }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { FixtureInterface } from '@/interfaces/interfaces';
import { getFixtureDate } from '@/services/FixtureService';

@Component
export default class FixtureScore extends Vue {
  @Prop() private fixture!: FixtureInterface;

  private getWinnerClassObject(teamType: string): object {
    if (
      (teamType === 'home' && this.fixture.homeTeamScore > this.fixture.awayTeamScore) ||
      (teamType === 'away' && this.fixture.awayTeamScore > this.fixture.homeTeamScore)
    ) {
      return {
        winner: true
      };
    }

    return {};
  }

  get fixtureDate() {
    return getFixtureDate(this.fixture);
  }

  get isFixtureCancelled() {
    return this.fixture.status.toLowerCase() === 'cancelled';
  }

  get isFixturePlayed() {
    return this.fixture.status.toLowerCase() === 'played';
  }
}
</script>

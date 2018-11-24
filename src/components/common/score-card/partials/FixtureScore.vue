<template>
  <div v-if="fixture" class="score">
    <div 
      v-if="fixture.status.toLowerCase() === 'cancelled'"
      class="result"
    >
      <span class="versus">Cancelled</span>
    </div>
    <div
      v-else-if="fixture.status.toLowerCase() === 'played'"
      class="result"
    >
      <span :class="getWinnerClassObject('home')">{{ fixture.homeTeamScore }}</span> <span class="result-dash">-</span> <span :class="getWinnerClassObject('away')">{{ fixture.awayTeamScore }}</span>
      <p v-if="fixture.round && fixture.categoryType" class="game-round">{{ fixture.round }} - {{ fixture.categoryType }}</p>
    </div>
    <div 
      v-else 
      class="result"
    >
      <div class="versus">
        <p class="game-date">{{ fixtureDate.date }}</p>
        <p class="game-time">{{ fixtureDate.time }}</p>
        <p class="game-round">{{ fixture.round }}</p>
      </div>
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
}
</script>

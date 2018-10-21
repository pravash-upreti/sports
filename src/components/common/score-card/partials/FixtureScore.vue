<template>
  <div class="score">
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
      {{ fixture.homeTeamScore }} <span class="result-dash">-</span> {{ fixture.awayTeamScore }}
    </div>
    <div 
      v-else 
      class="result"
    >
      <div class="versus">
        <p class="game-date">{fixtureDate.date}</p>
        <p class="game-time">{fixtureDate.time}</p>
        <p class="game-round">{fixture.round}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixtureScore',
  props: {
    fixture: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>

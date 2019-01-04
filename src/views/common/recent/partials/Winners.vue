<template>
  <div>
    <div>
      <h2 class="score-card-list-title">WINNER{{ twoOrMoreWnners ? 'S' : ''}}</h2>
      <div class="winner-card-list-wrapper">
        <winner-card
          v-for="(winner, index) in winners"
          :key="`winner-${index}`"
          :winner="winner.winner"
          :is-winner="true"
          :show-category="twoOrMoreWnners"
        />
      </div>
    </div>
    <div>
      <h2 class="score-card-list-title runner-up-title">RUNNER-UP{{ twoOrMoreWnners ? 'S' : '' }}</h2>
      <div class="winner-card-list-wrapper">
        <winner-card
          v-for="(winner, index) in winners"
          :key="`runner-up-${index}`"
          :winner="winner.runnerUp"
          :is-winner="false"
          :show-category="twoOrMoreWnners"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import WinnerCard from './WinnerCard.vue';

@Component({
  components: { WinnerCard }
})
export default class Winners extends Vue {
  @Prop() private winners!: object[];

  get twoOrMoreWnners() {
    return this.winners.length > 1;
  }
}
</script>

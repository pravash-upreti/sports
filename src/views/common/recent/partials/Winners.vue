<template>
  <div>
    <div>
      <h2 class="score-card-list-title">
        <i class="fa fa-trophy winner-trophy" />WINNER{{ twoOrMoreWnners ? 'S' : ''}}<i class="fa fa-trophy winner-trophy" />
      </h2>
      <div class="winner-card-wrapper">
        <winner-card
          v-for="(winner, index) in winners"
          :key="`winner-${index}`"
          :winner="winner.winner"
        />
      </div>
    </div>
    <div>
      <h2 class="score-card-list-title runner-up-title">
        <i class="fa fa-trophy runner-up-trophy" />RUNNER-UP{{ twoOrMoreWnners ? 'S' : '' }}<i class="fa fa-trophy runner-up-trophy" />
      </h2>
      <div class="winner-card-wrapper">
        <winner-card
          v-for="(winner, index) in winners"
          :key="`runner-up-${index}`"
          :winner="winner.runnerUp"
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

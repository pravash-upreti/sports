<template>
  <div>
    <div>
      <h2 class="fixture-title">WINNERS</h2>
      <h1
        v-for="(winner, index) in winners"
        :key="index"
        class="winners"
      >
        <span v-if="winner.category && winner.category.length" class="winner-category">({{ winner.category }})</span>
        <i class="fa fa-medal winner-trophy" />{{ winner.winner }}<i class="fa fa-medal winner-trophy" />
      </h1>
    </div>
    <div>
      <h2 class="fixture-title">RUNNER-UP</h2>
      <h1
        v-for="(winner, index) in winners"
        :key="index"
        class="runner-up"
      >
        <span v-if="winner.category && winner.category.length" class="winner-category">({{ winner.category }})</span>
        <i class="fa fa-medal runner-up-trophy" />{{ winner.runnerUp }}<i class="fa fa-medal runner-up-trophy" />
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Winners extends Vue {
  @Prop() private winners!: object[];
}
</script>

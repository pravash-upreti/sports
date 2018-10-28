<template>
  <div>
    <div>
      <h2 class="fixture-title">WINNERS</h2>
      <h1 class="winners">
        <i class="fa fa-medal winner-trophy" />{{ winner }}<i class="fa fa-medal winner-trophy" />
      </h1>
    </div>
    <div>
      <h2 class="fixture-title">RUNNER-UP</h2>
      <h1 class="runner-up">
        <i class="fa fa-medal runner-up-trophy" />{{ runnerUp }}<i class="fa fa-medal runner-up-trophy" />
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class Winners extends Vue {
  @Prop() private winner!: string;
  @Prop() private runnerUp!: string;
}
</script>

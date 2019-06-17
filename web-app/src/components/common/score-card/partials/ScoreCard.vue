<template>
  <div class="score-card-wrapper">
    <ScoreCardMobile :fixture="fixture" :showFixtureModal="showFixtureModal"/>
    <ScoreCardDesktop :fixture="fixture" :showFixtureModal="showFixtureModal"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ScoreCardMobile from './ScoreCardMobile.vue';
import ScoreCardDesktop from './ScoreCardDesktop.vue';
import { FixtureInterface } from '@/interfaces/interfaces';

@Component({
  components: { ScoreCardMobile, ScoreCardDesktop }
})
export default class ScoreCard extends Vue {
  @Prop() public triggerShowModal!: any;
  @Prop() public fixture!: FixtureInterface;

  public showFixtureModal() {
    if (this.triggerShowModal) {
      this.triggerShowModal(true, this.fixture);
    }
  }
}
</script>

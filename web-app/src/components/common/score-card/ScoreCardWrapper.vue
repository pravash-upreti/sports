<template>
  <!-- <router-link
    v-if="fixtureLink.length"
    :key="`fixture-${fixture.id}`"
    :to="fixtureURL"
    class="score-card-link-wrapper"
  >
    <ScoreCard :fixture="fixture" :fixture-link="fixtureLink"/>
  </router-link>
  <ScoreCard v-else :fixture="fixture" :fixture-link="fixtureLink"/> -->
  <ScoreCard
    :fixture="fixture"
    :triggerShowModal="triggerShowModal"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ScoreCard from './partials/ScoreCard.vue';
import { FixtureInterface } from '@/interfaces/interfaces';

@Component({
  components: { ScoreCard }
})
export default class ScoreCardWrapper extends Vue {
  @Prop() public triggerShowModal!: any;
  @Prop() public fixture!: FixtureInterface;

  /*
  // TODO: May be later.
  get fixtureURL(): string {
    if (!this.fixtureLink.length || !this.$route.params.season) {
      return '';
    }

    return this.fixtureLink
      .replace(':season', this.$route.params.season)
      .replace(':fixtureId', this.fixture.id.toString());
  } */
}
</script>


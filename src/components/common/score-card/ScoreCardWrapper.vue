<template>
  <!-- 
  TODO: Might be needed in future.
  <router-link 
    v-if="fixtureLink.length"
    :key="fixture.id"
    :to="fixtureURL"
  >
    <ScoreCard :fixture="fixture" :fixture-link="fixtureLink" />
  </router-link> -->
  <!-- <ScoreCard v-else :fixture="fixture" :fixture-link="fixtureLink" /> -->
  <ScoreCard :fixture="fixture" :fixture-link="fixtureLink" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ScoreCard from './partials/ScoreCard.vue';
import { FixtureInterface } from '@/interfaces/interfaces';

@Component({
  components: { ScoreCard }
})
export default class ScoreCardWrapper extends Vue {
  @Prop() public fixture!: FixtureInterface;
  @Prop() public fixtureLink!: string;

  get fixtureURL(): string {
    return this.fixtureLink.length ? this.fixtureLink.replace(':fixtureId', this.fixture.id.toString()) : '';
  }
}
</script>


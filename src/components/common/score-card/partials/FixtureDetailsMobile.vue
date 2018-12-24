<template>
  <div class="fixture-details">
    <div v-if="fixture.round" class="fixture-details-round">{{ fixture.round }} - {{ fixture.categoryType }}</div>
    <div class="fixture-details-date">{{ fixtureDate.date }} {{ fixtureDate.time }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import { FixtureInterface } from '@/interfaces/interfaces';
import { getFixtureDate } from '@/services/FixtureService';

@Component
export default class FixtureDetailsMobile extends Vue {
  @Prop() private fixture!: FixtureInterface;

  get fixtureDate() {
    return getFixtureDate(this.fixture);
  }
}
</script>

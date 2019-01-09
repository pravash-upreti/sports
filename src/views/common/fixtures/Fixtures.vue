<template>
  <div class="container">
    <div v-if="!fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <p v-if="!fixtures.length" class="alert">No fixtures found.</p>
      <score-cards-list v-else :fixtures="fixtures" :rounds="rounds" :fixture-link="fixtureLink"/>
    </div>
  </div>
</template>

<script lang="ts">
import { sortBy } from 'lodash';
import { Vue, Prop, Component } from 'vue-property-decorator';

import { FixtureInterface, RoundInterface } from '@/interfaces/interfaces';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';
import { sortFixturesByDate, getFixturesRounds } from '@/services/FixtureService';

@Component({
  components: { ScoreCardsList }
})
export default class Fixtures extends Vue {
  @Prop() private data!: any;
  @Prop() private fixtureLink!: string;

  get fixtures(): FixtureInterface[] {
    return this.data && this.data.fixtures && sortFixturesByDate(this.data.fixtures) || [];
  }

  get rounds(): RoundInterface[] {
    return (this.data && this.data.rounds && getFixturesRounds(this.fixtures, this.data.rounds)) || [];
  }
}
</script>

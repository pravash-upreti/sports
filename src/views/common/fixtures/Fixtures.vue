<template>
  <div class="container">
    <div v-if="!fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <score-cards-list :fixtures="fixtures" :fixture-link="fixtureLink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { FixtureInterface } from '@/interfaces/interfaces';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList }
})
export default class Fixtures extends Vue {
  public fixtureLink: string =  this.$parent.$data.fixtureLink;
  public fixtures: FixtureInterface[] = this.$parent.$data.data.fixtures;
}
</script>

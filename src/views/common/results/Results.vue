<template>
  <div class="container">
    <div v-if="!results.length">
      <p class="alert">No fixtures have been played. Please checkout the fixtures section.</p>
    </div>
    <div v-else>
      <score-cards-list :fixtures="results" :fixture-link="fixtureLink" />
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
export default class Results extends Vue {
  public results: FixtureInterface[] = this.$parent.$data.data.results;
  public fixtureLink: string = this.$parent.$data.fixtureLink;
}
</script>

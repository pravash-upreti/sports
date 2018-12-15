<template>
  <div class="container">
    <div v-if="!data.results.length">
      <p class="alert">No fixtures have been played. Please checkout the fixtures section.</p>
    </div>
    <div v-else>
      <p v-if="!data.results.length" class="alert">No results found.</p>
      <score-cards-list v-else :fixtures="data.results" :fixture-link="fixtureLink"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList }
})
export default class Results extends Vue {
  @Prop() private data!: any;
  @Prop() private fixtureLink!: string;
}
</script>

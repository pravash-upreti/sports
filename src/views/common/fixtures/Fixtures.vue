<template>
  <div class="container">
    <div v-if="!data.fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <p v-if="!data.fixtures.length" class="alert">No fixtures found.</p>
      <score-cards-list :fixtures="data.fixtures" :fixture-link="fixtureLink"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList }
})
export default class Fixtures extends Vue {
  @Prop() private data!: any;
  @Prop() private fixtureLink!: string;
}
</script>

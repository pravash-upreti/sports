<template>
  <div class="container">
    <div v-if="!results.length">
      <p class="alert">No fixtures have been played. Please checkout the fixtures section.</p>
    </div>
    <div v-else>
      <score-cards-list
        :fixtures="results"
        :fixture-link="fixtureLink"
      />
    </div>
  </div>
</template>

<script>
import ScoreCardsList from '../../../components/common/score-card/ScoreCardsList';

export default {
  name: 'Results',
  components: { ScoreCardsList },
  data: function() {
    return {
      results: this.$parent.data.results,
      fixtureLink: this.$parent.fixtureLink
    };
  }
};
</script>

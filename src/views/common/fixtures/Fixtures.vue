<template>
  <div class="container">
    <div v-if="!fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <score-cards-list
        :fixtures="fixtures"
        :fixture-link="fixtureLink"
      />
    </div>
  </div>
</template>

<script>
import ScoreCardsList from '../../../components/common/score-card/ScoreCardsList';

export default {
  name: 'Fixtures',
  components: { ScoreCardsList },
  data: function() {
    return {
      fixtures: this.$parent.data.fixtures,
      fixtureLink: this.$parent.fixtureLink
    };
  }
};
</script>

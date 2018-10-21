<template>
  <div class="container">
    <div v-if="recents.showWinners">
      <winners 
        :winner="recents.winner"
        :runner-up="recents.runnerUp"
      />
    </div>
    <div v-else>
      <recent-fixtures
        :recents="recents"
        :fixture-link="fixtureLink"
      />
    </div>
  </div>
</template>

<script>
import Winners from './partials/Winners';
import RecentFixtures from './partials/RecentFixtures';

export default {
  name: 'Recent',
  components: { Winners, RecentFixtures },
  data: function() {
    return {
      recents: this.$parent.data.recents,
      fixtureLink: this.$parent.data.fixtureLink
    };
  }
};
</script>

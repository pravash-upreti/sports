<template>
  <div class="container">
    <div class="teams-wrapper">
      <team
        v-for="(team, index) in teams"
        :key="index"
        :team="team"
      />
    </div>
  </div>
</template>

<script>
import Team from './partials/Team';

export default {
  name: 'Teams',
  components: { Team },
  data: function() {
    return {
      teams: this.$parent.data.teams
    };
  }
};
</script>

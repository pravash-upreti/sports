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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Team from './partials/Team.vue';

@Component({
  components: { Team }
})
export default class Teams extends Vue {
  private teams: Team[] = this.$parent.$data.data.teams;
}
</script>

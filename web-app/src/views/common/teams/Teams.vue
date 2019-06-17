<template>
  <div class="container">
    <p v-if="!data.teams.length" class="alert">Nothing to show here at the moment.</p>
    <div v-else class="teams-list-wrapper">
      <Team
        v-for="(team, index) in data.teams"
        :key="`team-${index}`"
        :team="team"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import Team from './partials/Team.vue';

@Component({
  components: { Team }
})
export default class Teams extends Vue {
  @Prop() private data!: any;
}
</script>

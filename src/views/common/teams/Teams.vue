<template>
  <div class="container">
    <div class="teams-wrapper">
      <team
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

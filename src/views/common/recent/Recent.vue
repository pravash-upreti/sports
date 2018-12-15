<template>
  <div class="container">
    <div class="recent-wrapper">
      <div v-if="data.recents.showWinners">
        <Winners :winners="data.recents.winners" />
      </div>
      <div v-else>
        <RecentFixtures :recents="data.recents" :fixture-link="fixtureLink" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import Winners from './partials/Winners.vue';
import RecentFixtures from './partials/RecentFixtures.vue';

@Component({
  components: { Winners, RecentFixtures }
})
export default class Recent extends Vue {
  @Prop() private data!: any;
  @Prop() private fixtureLink!: string;
}
</script>

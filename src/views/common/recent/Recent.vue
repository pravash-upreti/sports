<template>
  <div class="recent-wrapper">
    <Winners v-if="data.recents.showWinners" :winners="data.recents.winners" />
    <RecentFixtures v-else :recents="data.recents" :fixtureLink="fixtureLink" />
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

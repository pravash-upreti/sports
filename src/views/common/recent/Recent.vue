<template>
  <div class="recent-wrapper">
    <Winners v-if="data.recents.showWinners" :winners="data.recents.winners" />
    <RecentFixtures v-else-if="data.recents.length" :recents="data.recents" :triggerShowModal="triggerShowModal" />
    <RegistrationInfo v-else :details="data.details" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import Winners from './partials/Winners.vue';
import RecentFixtures from './partials/RecentFixtures.vue';
import RegistrationInfo from './partials/RegistrationInfo.vue';

@Component({
  components: { Winners, RecentFixtures, RegistrationInfo }
})
export default class Recent extends Vue {
  @Prop() public triggerShowModal!: any;

  @Prop() private data!: any;
}
</script>

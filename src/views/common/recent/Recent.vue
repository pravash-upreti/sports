<template>
  <div class="container">
    Nothing here
    <!-- <div v-if="recents.showWinners">
      <Winners :winners="recents.winners" />
    </div>
    <div v-else>
      <RecentFixtures :recents="recents" :fixture-link="fixtureLink" />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Winners from './partials/Winners.vue';
import RecentFixtures from './partials/RecentFixtures.vue';

@Component({
  components: { Winners, RecentFixtures }
})
export default class Recent extends Vue {
  // private recents: object = this.$parent.$data.data.data.recents;
  // private fixtureLink: string = this.$parent.$data.fixtureLink;
}
</script>

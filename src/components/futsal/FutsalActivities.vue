<template>
  <div class="futsal-score-details-wrapper">
    <div class="futsal-score-details">
      <div v-for="(activity, index) in reversedActivities" :key="index" class="futsal-activity-row">
        <div class="activity-home-team">
          <FutsalActivitivist :activity="activity" teamType="home"/>
        </div>
        <div class="activity-score-time">
          <span class="activity-score-time-wrapper">
            <span v-if="activity.time">{{ activity.time }}'</span>
            <span v-else>NA</span>
          </span>
        </div>
        <div class="activity-away-team">
          <FutsalActivitivist :activity="activity" teamType="away"/>
        </div>
      </div>
    </div>
    <div class="activity-score-time-line"/>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import { ActivityInterface } from '@/interfaces/interfaces';
import FutsalActivitivist from '@/components/futsal/FutsalActivitivist.vue';

@Component({
  components: { FutsalActivitivist }
})
export default class FutsalActivities extends Vue {
  @Prop() private activities!: ActivityInterface[];

  private getActivityPlayer(activity: ActivityInterface, teamType: string): string {
    if (activity.teamType.toLowerCase() === teamType.toLowerCase()) {
      return activity.player;
    }

    return '';
  }

  get reversedActivities() {
    const acts: ActivityInterface[] = Object.assign([], this.activities);

    return acts.sort((activity) => activity.id).reverse();
  }
}
</script>

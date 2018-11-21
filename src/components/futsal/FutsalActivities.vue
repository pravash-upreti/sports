<template>
  <div class="futsal-score-details-wrapper">
    <table class="futsal-score-details">
      <tbody>
        <tr
          v-for="(activity, index) in reverserActivities"
          :key="index"
          class="activity-row"
        >
          <td class="activity-home-team"><futsal-activitivist :activity="activity" teamType="home" /></td>
          <td class="activity-score-time"><span class="activity-score-time-wrapper">{{ activity.time }}'</span></td>
          <td class="activity-away-team"><futsal-activitivist :activity="activity" teamType="away" /></td>
        </tr>
      </tbody>
    </table>
    <div class="activity-score-time-line" />
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

  get reverserActivities() {
    const acts: ActivityInterface[] = Object.assign([], this.activities);

    return acts.sort((activity) => activity.id).reverse();
  }
}
</script>

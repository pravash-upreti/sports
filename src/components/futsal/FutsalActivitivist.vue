<template>
  <div class="futsal-activist-wrapper" v-if="showActivityInfo">
    <span class="activist-name" v-if="teamType === 'home'">{{ activity.player }}</span>
    <div class="activity-symbol-wrapper">
      <img
        v-if="activityType === 'goal'"
        :src="footballIcon" 
        class="activity-symbol"
      />
      <img
        v-else-if="activityType === 'own goal'"
        :src="footballIcon" 
        class="activity-symbol"
      />
      <img
        v-else-if="activityType === 'yellow card'"
        :src="yellowCardIcon" 
        class="activity-symbol"
      />
      <img
        v-else-if="activityType === 'double yellow card'"
        :src="doubleYellowCardIcon" 
        class="activity-symbol"
      />
      <img
        v-else-if="activityType === 'red card'"
        :src="redCardIcon" 
        class="activity-symbol"
      />
    </div>
    <span class="activist-name" v-if="teamType === 'away'">{{ activity.player }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import { ActivityInterface } from '@/interfaces/interfaces';
import { yellowCardIcon, redCardIcon, footballIcon, doubleYellowCardIcon } from '@/assets/images';

@Component
export default class FutsalActivitivist extends Vue {
  @Prop() private activity!: ActivityInterface;
  @Prop() private teamType!: string;

  private redCardIcon: string = redCardIcon;
  private footballIcon: string = footballIcon;
  private yellowCardIcon: string = yellowCardIcon;
  private doubleYellowCardIcon: string = doubleYellowCardIcon;

  get activityType() {
    return this.activity.type.toLowerCase();
  }

  get showActivityInfo(): boolean {
    return this.activity.teamType.toLowerCase() === this.teamType;
  }
}
</script>

<template>
  <div class="futsal-activist-wrapper" :class="{ 'futsal-activist-assist': activityType === 'assist' }">
    <span class="activist-name" v-if="teamType === 'home'">{{ playerName }}</span>
    <div class="activity-symbol-wrapper">
      <img v-if="activityType === 'goal'" :src="footballIcon" class="activity-symbol">
      <img v-else-if="activityType === 'own goal'" :src="footballIcon" class="activity-symbol">
      <img v-else-if="activityType === 'yellow card'" :src="yellowCardIcon" class="activity-symbol">
      <img
        v-else-if="activityType === 'double yellow card'"
        :src="doubleYellowCardIcon"
        class="activity-symbol"
      >
      <img v-else-if="activityType === 'red card'" :src="redCardIcon" class="activity-symbol">
      <img v-else-if="activityType === 'assist'" :src="footballAssistIcon" class="activity-symbol">
    </div>
    <span class="activist-name" v-if="teamType === 'away'">{{ playerName }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import { ActivityInterface } from '@/interfaces/interfaces';
import { yellowCardIcon, redCardIcon, footballIcon, footballAssistIcon, doubleYellowCardIcon } from '@/assets/images';

@Component
export default class FutsalActivitivist extends Vue {
  @Prop() private teamType!: string;
  @Prop() private playerName!: string;
  @Prop() private activityType!: string;

  private redCardIcon: string = redCardIcon;
  private footballIcon: string = footballIcon;
  private yellowCardIcon: string = yellowCardIcon;
  private footballAssistIcon: string = footballAssistIcon;
  private doubleYellowCardIcon: string = doubleYellowCardIcon;
}
</script>

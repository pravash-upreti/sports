<template>
  <div>
    <FutsalActivitivist
      v-if="showActivityInfo"
      :teamType="teamType"
      :activityType="activity.type.toLowerCase()"
      :playerName="activity.player"
    />
    <FutsalActivitivist
      v-if="showActivityInfo && hasAssist"
      :teamType="teamType"
      activityType="assist"
      :playerName="activity.assistBy"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { ActivityInterface } from '@/interfaces/interfaces';
import FutsalActivitivist from '@/components/futsal/FutsalActivitivist.vue';

@Component({
  components: { FutsalActivitivist }
})
export default class FutsalActivity extends Vue {
  @Prop() public teamType!: string;
  @Prop() public activity!: ActivityInterface;

  get hasAssist(): boolean {
    return !!(this.activity.assistBy && this.activity.assistBy.length);
  }

  get showActivityInfo(): boolean {
    return this.activity.teamType.toLowerCase() === this.teamType.toLowerCase();
  }
}
</script>

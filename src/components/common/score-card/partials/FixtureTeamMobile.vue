<template>
  <div :class="['fixture-team-name-wrapper', isWinner ? 'winner' : '', isGrouped ? 'team-grouped' : '']">
    <span v-if="isGrouped" class="fixture-team-symbol">
      <participant-logo
        v-for="(player, index) in teamInfo.players"
        :key="index"
        :participant="player"
        :custom-styles="teamCustomStyles"
      />
    </span>
    <span v-else class="fixture-team-symbol">
      <participant-logo
        :participant="teamInfo"
        :custom-styles="teamCustomStyles"
      />
    </span>
    <span :class="['fixture-team-name', classNames]">{{ teamInfo.name }}</span>
    <span class="fixture-team-score"><i v-if="isWinner" class="fas fa-trophy" /> {{ score }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { TeamInterface } from '@/interfaces/interfaces';
import ParticipantLogo from '@/components/common/ParticipantLogo.vue';

@Component({
  components: { ParticipantLogo }
})
export default class FixtureTeamMobile extends Vue {
  @Prop()
  public team!: TeamInterface;
  @Prop()
  public isWinner!: boolean;
  @Prop()
  public score!: number;

  private isTeamTBD() {
    return !Object.keys(this.team).length;
  }

  get isGrouped(): boolean {
    return !!(this.team && this.team.players);
  }

  get teamCustomStyles(): object {
    let customStyles = {};

    if (this.team.logo) {
      customStyles = Object.assign(customStyles, {
        color: this.team.logo.color,
        backgroundColor: this.team.logo.backgroundColor
      });
    }

    return customStyles;
  }

  get teamInfo(): TeamInterface {
    // Check if team is TBD. Set a default TBD team.
    if (this.isTeamTBD()) {
      return {
        id: 0,
        name: 'TBD',
        category: ''
      };
    }

    return this.team;
  }
}
</script>

<template>
  <div :class="classObject">
    <div class="team-name-wrapper">
      <div v-if="isAwayTeam" :class="teamClassObject">
        <span v-if="isGrouped">
          <participant-logo
            v-for="(player, index) in teamInfo.players"
            :key="index"
            :hide-image="true"
            :participant="player"
            :custom-styles="teamCustomStyles"
          />
        </span>
        <span v-else>
          <participant-logo
            :hide-image="true"
            :participant="teamInfo"
            :custom-styles="teamCustomStyles"
          />
        </span>
        {{ teamInfo.name }}
      </div>
      <div v-else :class="teamClassObject">
        {{ teamInfo.name }}
        <span v-if="isGrouped">
          <participant-logo
            v-for="(player, index) in teamInfo.players"
            :key="index"
            :hide-image="true"
            :participant="player"
            :custom-styles="teamCustomStyles"
          />
        </span>
        <span v-else>
          <participant-logo
            :hide-image="true"
            :participant="teamInfo"
            :custom-styles="teamCustomStyles"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { TeamInterface } from '@/interfaces/interfaces';
import ParticipantLogo from '@/components/common/ParticipantLogo.vue';

@Component({
  components: { ParticipantLogo }
})
export default class FixtureTeam extends Vue {
  @Prop()
  public team!: TeamInterface;
  @Prop()
  public classNames!: object;
  @Prop()
  public isAwayTeam!: boolean;

  private isTeamTBD() {
    return !Object.keys(this.team).length;
  }

  get isGrouped(): boolean {
    return !!(this.team && this.team.players);
  }

  get classObject(): object {
    return Object.assign(
      {
        'team-info': true
      },
      this.classNames
    );
  }

  get teamClassObject(): object {
    return {
      'team-name': true,
      'team-grouped': this.isGrouped
    };
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

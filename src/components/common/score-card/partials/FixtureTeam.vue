<template>
  <div class="fixture-team-name-wrapper">
    <div v-if="isAwayTeam" :class="teamClassObject">
      <span :class="['fixture-team-name', classNames]">
        {{ teamInfo.name }}
      </span>
      <span class="fixture-team-symbol">
        <span v-if="isGrouped">
          <participant-logo
            v-for="(player, index) in teamInfo.players"
            :key="index"
            :hide-image="hideImage"
            :participant="player"
            :custom-styles="teamCustomStyles"
          />
        </span>
        <span v-else>
          <participant-logo
            :hide-image="hideImage"
            :participant="teamInfo"
            :custom-styles="teamCustomStyles"
          />
        </span>
      </span>
    </div>
    <div v-else :class="teamClassObject">
      <span class="fixture-team-symbol">
        <span v-if="isGrouped">
          <participant-logo
            v-for="(player, index) in teamInfo.players"
            :key="index"
            :hide-image="hideImage"
            :participant="player"
            :custom-styles="teamCustomStyles"
          />
        </span>
        <span v-else>
          <participant-logo
            :hide-image="hideImage"
            :participant="teamInfo"
            :custom-styles="teamCustomStyles"
          />
        </span>
      </span>
      <span :class="['fixture-team-name', classNames]">
        {{ teamInfo.name }}
      </span>
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

  public hideImage: boolean = false;

  private isTeamTBD() {
    return !Object.keys(this.team).length;
  }

  get isGrouped(): boolean {
    return !!(this.team && this.team.players);
  }

  get teamClassObject(): object {
    return {
      'fixture-team-name-wrapper': true,
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

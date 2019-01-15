<template>
  <div class="fixture-team-name-wrapper">
    <div v-if="isAwayTeam" :class="[teamClassObject, isAwayTeamWinner ? 'winner' : '']">
      <span :class="['fixture-team-name', classNames]">
        {{ teamInfo.name }} <i v-if="isAwayTeamWinner" class="fas fa-trophy"></i>
      </span>
      <span v-if="isGrouped" class="fixture-team-symbol">
        <ParticipantLogo
          v-for="(player, index) in teamInfo.players"
          :key="index"
          :hideImage="hideImage"
          :participant="player"
          :customStyles="teamCustomStyles"
        />
      </span>
      <span v-else class="fixture-team-symbol">
        <ParticipantLogo
          :hideImage="hideImage"
          :participant="teamInfo"
          :customStyles="teamCustomStyles"
        />
      </span>
    </div>
    <div v-else :class="[teamClassObject, isHomeTeamWinner ? 'winner' : '']">
      <span v-if="isGrouped" class="fixture-team-symbol">
        <ParticipantLogo
          v-for="(player, index) in teamInfo.players"
          :key="index"
          :hideImage="hideImage"
          :participant="player"
          :customStyles="teamCustomStyles"
        />
      </span>
      <span v-else class="fixture-team-symbol">
        <ParticipantLogo
          :hideImage="hideImage"
          :participant="teamInfo"
          :customStyles="teamCustomStyles"
        />
      </span>
      <span :class="['fixture-team-name', classNames]">
        <i v-if="isHomeTeamWinner" class="fas fa-trophy"></i> {{ teamInfo.name }}
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
  @Prop()
  public isHomeTeamWinner!: boolean;
  @Prop()
  public isAwayTeamWinner!: boolean;

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

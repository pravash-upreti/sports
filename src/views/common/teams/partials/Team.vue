<template>
  <div class="team">
    <h4 v-if="team.logo" class="team-title">
      <participant-logo 
        :participant="team"
        :custom-styles="customStyles"
      />
      {{ team.name }}
    </h4>
    <ul class="team-players-wrapper">
      <li
        v-for="(player, index) in team.players"
        :key="`team-player-${index}`"
        class="team-player"
      >
        <participant-logo
          :participant="player"
          :custom-styles="customStyles"
        />
        {{ player.name }}<span v-if="player.isCaptain" class="team-player-captain">&nbsp;(c)</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ParticipantLogo from '@/components/common/ParticipantLogo.vue';
import { TeamInterface } from '@/interfaces/interfaces';

@Component({
  components: { ParticipantLogo }
})
export default class Team extends Vue {
  @Prop() public team!: TeamInterface;

  get customStyles() {
    return this.team.logo ? {
      color: this.team.logo.color,
      backgroundColor: this.team.logo.backgroundColor
    } : {};
  }
}
</script>

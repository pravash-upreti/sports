<template>
  <div class="team">
    <div 
      v-if="team.logo"
      class="team-title"
    >
      <h4>
        <participant-logo 
          :participant="team"
          :custom-styles="customStyles"
        />
        {{ team.name }}
      </h4>
    </div>
    <div class="team-players-wrapper">
      <ul>
        <li
          v-for="(player, index) in team.players"
          :key="index"
        >
          <participant-logo
            :participant="player"
            :custom-styles="customStyles"
          />
          {{ player.name }}
        </li>
      </ul>
    </div>
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

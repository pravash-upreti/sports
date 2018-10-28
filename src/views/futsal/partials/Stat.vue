<template>
  <div v-if="stat" class="stats-col">
    <h4 class="stats-title">
      <img 
        v-if="stat.icon"
        :src="stat.icon"
        class="stat-image-logo"
        alt=""
      >
      {{ stat.title }}
    </h4>
    <ul>
      <li
        v-for="(player, index) in stat.players"
        :key="index"
      >
        <span class="stat-player-name">
          <participant-logo :participant="player" />
          {{ player.name }}
        </span>
        <span class="stat-player-stat">
          {{ player.count }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import ParticipantLogo from '@/components/common/ParticipantLogo.vue';
import { StatInterface } from '@/interfaces/interfaces';

@Component({
  components: { ParticipantLogo }
})
export default class Stat extends Vue {
  @Prop() public stat!: StatInterface;
}
</script>

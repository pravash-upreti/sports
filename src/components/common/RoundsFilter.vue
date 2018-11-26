<template>
  <div class="rounds-filter-wrapper">
    <ul>
      <li
        v-for="(round, index) in rounds"
        :key="index"
        :class="activeClassObject(round)"
        @click="handleChangeSelectedRound(round)"
      >
        {{ round.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { RoundInterface } from '@/interfaces/interfaces';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class RoundsFilter extends Vue {
  @Prop() public rounds!: RoundInterface[];
  @Prop() public changeSelectedRound!: any;
  @Prop() public selectedRound!: RoundInterface;

  private handleChangeSelectedRound(round: RoundInterface) {
    this.changeSelectedRound(round);
  }

  private activeClassObject(round: RoundInterface) {
    return {
      active: round.id === this.selectedRound.id
    };
  }
}
</script>

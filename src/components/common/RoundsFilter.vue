<template>
  <div class="rounds-filter-wrapper select-wrapper">
    <select class="rounds-filter" @change="handleChangeSelectedRound" v-model="selectedRound">
      <option
        v-for="(round, index) in rounds"
        :key="`round-${index}`"
        :value="round"
      >{{ round.description }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { RoundInterface } from '@/interfaces/interfaces';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class RoundsFilter extends Vue {
  @Prop()
  public rounds!: RoundInterface[];
  @Prop()
  public changeSelectedRound!: any;

  public selectedRound: RoundInterface | null = null;

  public created() {
    this.selectedRound = this.rounds[0];
  }

  private handleChangeSelectedRound(e: any) {
    e.preventDefault();

    this.changeSelectedRound(this.selectedRound);
  }
}
</script>

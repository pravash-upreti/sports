<template>
  <div v-if="fixtures.length" :class="scoreCardListWrapperClass">
    <RoundsFilter
      v-if="rounds && rounds.length"
      :rounds="rounds"
      :selectedRound="selectedRound"
      :changeSelectedRound="changeSelectedRound"
    />
    <h2 v-if="title && title.length" class="score-card-list-title">{{ title }}</h2>
    <ScoreCardWrapper
      v-for="(fixture, index) in fixturesList"
      :fixture="fixture"
      :fixtureLink="fixtureLink"
      :key="`score-card-wrapper-${index}`"
    />
  </div>
</template>

<script lang="ts">
import { filter, cloneDeep } from 'lodash';
import { Component, Vue, Prop } from 'vue-property-decorator';

import { getFixturesRounds } from '@/services/FixtureService';
import RoundsFilter from '@/components/common/RoundsFilter.vue';
import { FixtureInterface, RoundInterface } from '@/interfaces/interfaces';
import ScoreCardWrapper from '@/components/common/score-card/ScoreCardWrapper.vue';

@Component({
  components: { RoundsFilter, ScoreCardWrapper }
})
export default class ScoreCardList extends Vue {
  @Prop()
  public title!: string;
  @Prop()
  public fixtureLink!: string;
  @Prop({ default: () => [] })
  public rounds!: RoundInterface[];
  @Prop({ default: () => [] })
  public fixtures!: FixtureInterface[];

  public selectedRound: RoundInterface | null = (this.rounds && this.rounds.length && this.rounds[0]) || null;

  public changeSelectedRound(round: RoundInterface) {
    this.selectedRound = round;
  }

  get fixturesList(): FixtureInterface[] {
    // For all rounds, return all fixtures.
    if (this.selectedRound && this.selectedRound.id !== 0) {
      return filter(
        cloneDeep(this.fixtures),
        (fixture) => (
          fixture.round.toLowerCase() === (this.selectedRound && this.selectedRound.description.toLowerCase())
        )
      );
    }

    return this.fixtures;
  }

  get scoreCardListWrapperClass() {
    return {
      'score-card-list-wrapper': true,
      'score-card-list-wrapper--single': this.fixturesList.length === 1
    };
  }
}
</script>

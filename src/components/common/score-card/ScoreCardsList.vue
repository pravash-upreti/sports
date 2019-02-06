<template>
  <div v-if="fixtures.length" :class="scoreCardListWrapperClass">
    <div class="filters-wrapper">
      <RoundsFilter
        v-if="rounds && rounds.length"
        :rounds="rounds"
        :selectedRound="selectedRound"
        :changeSelectedRound="changeSelectedRound"
      />
      <SearchBar
        v-if="showSearchField"
        :class="{ 'with-rounds': rounds && rounds.length }"
        :changeSearchKeyword="changeSearchKeyword"
      />
    </div>
    <h2 v-if="title && title.length" class="score-card-list-title">{{ title }}</h2>
    <ScoreCardWrapper
      v-for="(fixture, index) in fixturesList"
      :key="`score-card-wrapper-${index}`"
      :fixture="fixture"
      :triggerShowModal="triggerShowModal"
    />
  </div>
</template>

<script lang="ts">
import { filter, cloneDeep } from 'lodash';
import { Component, Vue, Prop } from 'vue-property-decorator';

import SearchBar from '@/components/common/SearchBar.vue';
import RoundsFilter from '@/components/common/RoundsFilter.vue';
import { FixtureInterface, RoundInterface } from '@/interfaces/interfaces';
import ScoreCardWrapper from '@/components/common/score-card/ScoreCardWrapper.vue';
import { getFixturesRounds, searchFixturesByKeyword } from '@/services/FixtureService';

@Component({
  components: { SearchBar, RoundsFilter, ScoreCardWrapper }
})
export default class ScoreCardList extends Vue {
  @Prop() public title!: string;
  @Prop() public triggerShowModal!: any;
  @Prop({ default: false }) public showSearchField!: boolean;
  @Prop({ default: () => [] }) public rounds!: RoundInterface[];
  @Prop({ default: () => [] }) public fixtures!: FixtureInterface[];

  public searckKeyword: string = '';
  public selectedRound: RoundInterface | null = (this.rounds && this.rounds.length && this.rounds[0]) || null;

  public changeSelectedRound(round: RoundInterface) {
    this.selectedRound = round;
  }

  public changeSearchKeyword(keyword: string) {
    this.searckKeyword = keyword;
  }

  get fixturesList(): FixtureInterface[] {
    let fixturesList = cloneDeep(this.fixtures);

    // For all rounds, return all fixtures.
    if (this.selectedRound && this.selectedRound.id !== 0) {
      fixturesList = filter(
        fixturesList,
        (fx) => fx.round.toLowerCase() === (this.selectedRound && this.selectedRound.description.toLowerCase())
      );
    }

    // Search fixtures by keywords
    if (this.searckKeyword && this.searckKeyword.length) {
      fixturesList = searchFixturesByKeyword(fixturesList, this.searckKeyword);
    }

    return fixturesList;
  }

  get scoreCardListWrapperClass() {
    return {
      'score-card-list-wrapper': true,
      'score-card-list-wrapper--single': this.fixturesList.length === 1
    };
  }
}
</script>

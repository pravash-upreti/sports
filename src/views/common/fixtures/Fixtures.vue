<template>
  <div>
    <div class="container" v-if="!fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <div class="filters-wrapper">
        <div class="container">
          <categories-filter
            v-if="categories && categories.length"
            :categories="categories"
            :selected-category="selectedCategory"
            :change-selected-category="setSelectedCategory"
          />
          <search-bar :search-keyword="searchKeyword" :set-search-keyword="setSearchKeyword"/>
        </div>
      </div>
      <rounds-filter
        v-if="updatedRounds && updatedRounds.length"
        :rounds="updatedRounds"
        :selected-round="selectedRound"
        :change-selected-round="setSelectedRound"
      />
      <div class="container tournament-content">
        <p v-if="!fixturesList.length" class="alert">No fixtures found.</p>
        <score-cards-list :fixtures="fixturesList" :fixture-link="fixtureLink"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import sortBy from 'lodash/sortBy';
import { Component, Vue } from 'vue-property-decorator';

import {
  FixtureInterface,
  CategoryInterface,
  RoundInterface
} from '@/interfaces/interfaces';
import SearchBar from '@/components/common/SearchBar.vue';
import RoundsFilter from '@/components/common/RoundsFilter.vue';
import { searchFixturesByKeyword } from '@/services/FixtureService';
import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { RoundsFilter, ScoreCardsList, CategoriesFilter, SearchBar }
})
export default class Fixtures extends Vue {
  private searchKeyword: string = '';
  private updatedRounds: RoundInterface[] = [];
  private searchLink: string = this.$parent.$data.searchLink;
  private fixtureLink: string = this.$parent.$data.fixtureLink;
  private fixtures: FixtureInterface[] = this.$parent.$data.data.fixtures;
  private rounds: RoundInterface[] = this.$parent.$data.data.rounds || [];
  private categories: CategoryInterface[] =
    this.$parent.$data.data.categories || [];
  private selectedRound: RoundInterface = this.rounds && this.rounds[0];
  private selectedCategory: CategoryInterface =
    this.categories && this.categories[0];

  private setSelectedCategory(category: CategoryInterface) {
    this.selectedCategory = category;
  }

  private setSelectedRound(round: RoundInterface) {
    this.selectedRound = round;
  }

  private updateRoundsList(newRounds: string[]) {
    const roundsList = this.rounds.filter((round) => {
      // Keep 'All' category
      return round.id === 0 || newRounds.indexOf(round.description) >= 0;
    });

    this.updatedRounds =
      roundsList.length > 1 ? sortBy(roundsList, ['sortOrder']) : [];

    // If the selected round does not exist in another category
    // Set the first round as the selected one.
    const isSelectedRoundInUpdatedList =
      this.selectedRound &&
      this.updatedRounds.some((round) => round.id === this.selectedRound.id);

    if (!isSelectedRoundInUpdatedList) {
      this.setSelectedRound(this.updatedRounds[0]);
    }
  }

  get fixturesList() {
    let fixturesList = this.fixtures;

    if (this.searchKeyword && this.searchKeyword.length) {
      fixturesList = searchFixturesByKeyword(this.fixtures, this.searchKeyword);
    } else if (this.selectedCategory && this.selectedCategory.id !== 0) {
      fixturesList = fixturesList.filter((fixture) => {
        return (
          fixture.categoryType.toLowerCase() ===
          this.selectedCategory.description.toLowerCase()
        );
      });
    }

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      fixturesList = fixturesList.filter((fixture) => {
        return (
          fixture.categoryType.toLowerCase() ===
          this.selectedCategory.description.toLowerCase()
        );
      });
    }

    const roundsInFixtures = [
      ...new Set(fixturesList.map((fixture) => fixture.round))
    ];

    this.updateRoundsList(roundsInFixtures);

    if (this.selectedRound && this.selectedRound.id !== 0) {
      fixturesList = fixturesList.filter((fixture) => {
        return (
          fixture.round.toLowerCase() ===
          this.selectedRound.description.toLowerCase()
        );
      });
    }

    return fixturesList;
  }
}
</script>

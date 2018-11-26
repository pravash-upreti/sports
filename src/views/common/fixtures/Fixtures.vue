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
        </div>
      </div>
      <rounds-filter
        v-if="updatedRounds && updatedRounds.length"
        :rounds="updatedRounds"
        :selected-round="selectedRound"
        :change-selected-round="setSelectedRound"
      />
      <div class="container">
        <score-cards-list :fixtures="fixturesList" :fixture-link="fixtureLink" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import sortBy from 'lodash/sortBy';
import { Component, Vue } from 'vue-property-decorator';

import RoundsFilter from '@/components/common/RoundsFilter.vue';
import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';
import { FixtureInterface, CategoryInterface, RoundInterface } from '@/interfaces/interfaces';

@Component({
  components: { RoundsFilter, ScoreCardsList, CategoriesFilter }
})
export default class Fixtures extends Vue {
  private updatedRounds: RoundInterface[] = [];
  private fixtureLink: string =  this.$parent.$data.fixtureLink;
  private fixtures: FixtureInterface[] = this.$parent.$data.data.fixtures;
  private rounds: RoundInterface[] = this.$parent.$data.data.rounds || [];
  private categories: CategoryInterface[] = this.$parent.$data.data.categories || [];
  private selectedRound: RoundInterface = this.rounds && this.rounds[0];
  private selectedCategory: CategoryInterface = this.categories && this.categories[0];

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

    this.updatedRounds = sortBy(roundsList, ['sortOrder']);
  }

  get fixturesList() {
    let fixturesList = this.fixtures;

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      fixturesList = fixturesList.filter((fixture) => {
        return fixture.categoryType.toLowerCase() === this.selectedCategory.description.toLowerCase();
      });
    }

    const roundsInFixtures = [...new Set( fixturesList.map((fixture) => fixture.round)) ];

    this.updateRoundsList(roundsInFixtures);

    if (this.selectedRound && this.selectedRound.id !== 0) {
      fixturesList = fixturesList.filter((fixture) => {
        return fixture.round.toLowerCase() === this.selectedRound.description.toLowerCase();
      });
    }

    return fixturesList;
  }
}
</script>

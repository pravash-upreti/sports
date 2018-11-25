<template>
  <div class="container">
    <div v-if="!results.length">
      <p class="alert">No fixtures have been played. Please checkout the fixtures section.</p>
    </div>
    <div v-else>
      <categories-filter
        v-if="categories && categories.length"
        :categories="categories"
        :selected-category="selectedCategory"
        :change-selected-category="setSelectedCategory"
      />
      <rounds-filter
        v-if="rounds && rounds.length"
        :rounds="rounds"
        :selected-round="selectedRound"
        :change-selected-round="setSelectedRound"
      />
      <score-cards-list :fixtures="resultsList" :fixture-link="fixtureLink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import RoundsFilter from '@/components/common/RoundsFilter.vue';
import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';
import { FixtureInterface, CategoryInterface, RoundInterface } from '@/interfaces/interfaces';

@Component({
  components: { RoundsFilter, ScoreCardsList, CategoriesFilter }
})
export default class Results extends Vue {
  public fixtureLink: string = this.$parent.$data.fixtureLink;
  public results: FixtureInterface[] = this.$parent.$data.data.results;
  public rounds: RoundInterface[] = this.$parent.$data.data.rounds || [];
  public categories: CategoryInterface[] = this.$parent.$data.data.categories || [];
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

    this.rounds = roundsList;
  }

  get resultsList() {
    let resultsList = this.results;

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      resultsList = resultsList.filter((fixture) => {
        return fixture.categoryType.toLowerCase() === this.selectedCategory.description.toLowerCase();
      });
    }

    const roundsInFixtures = [...new Set( resultsList.map((fixture) => fixture.round)) ];

    this.updateRoundsList(roundsInFixtures);

    if (this.selectedRound && this.selectedRound.id !== 0) {
      resultsList = resultsList.filter((fixture) => {
        return fixture.round.toLowerCase() === this.selectedRound.description.toLowerCase();
      });
    }

    return resultsList;
  }
}
</script>

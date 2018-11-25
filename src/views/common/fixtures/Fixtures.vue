<template>
  <div class="container">
    <div v-if="!fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <category-filter
        v-if="categories && categories.length"
        :categories="categories"
        :selected-category="selectedCategory"
        :change-selected-category="setSelectedCategory"
      />
      <score-cards-list :fixtures="fixturesList" :fixture-link="fixtureLink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CategoryFilter from '@/components/common/CategoryFilter.vue';
import { FixtureInterface, CategoryInterface } from '@/interfaces/interfaces';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList }
})
export default class Fixtures extends Vue {
  public fixtureLink: string =  this.$parent.$data.fixtureLink;
  public fixtures: FixtureInterface[] = this.$parent.$data.data.fixtures;
  public categories: CategoryInterface[] = this.$parent.$data.data.categories || [];
  private selectedCategory: CategoryInterface = this.categories && this.categories[0];

  private setSelectedCategory(category: CategoryInterface) {
    this.selectedCategory = category;
  }

  get fixturesList() {
    let fixturesList = this.fixtures;

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      fixturesList = this.fixtures.filter((fixture) => {
        return fixture.categoryType.toLowerCase() === this.selectedCategory.description.toLowerCase();
      });
    }

    return fixturesList;
  }
}
</script>

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
      <score-cards-list :fixtures="resultsList" :fixture-link="fixtureLink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import { FixtureInterface, CategoryInterface } from '@/interfaces/interfaces';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList, CategoriesFilter }
})
export default class Results extends Vue {
  public fixtureLink: string = this.$parent.$data.fixtureLink;
  public results: FixtureInterface[] = this.$parent.$data.data.results;
  public categories: CategoryInterface[] = this.$parent.$data.data.categories || [];
  private selectedCategory: CategoryInterface = this.categories && this.categories[0];

  private setSelectedCategory(category: CategoryInterface) {
    this.selectedCategory = category;
  }

  get resultsList() {
    let resultsList = this.results;

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      resultsList = this.results.filter((fixture) => {
        return fixture.categoryType.toLowerCase() === this.selectedCategory.description.toLowerCase();
      });
    }

    return resultsList;
  }
}
</script>

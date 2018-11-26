<template>
  <div >
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
    <div class="container">
      <div class="teams-wrapper">
        <team
          v-for="(team, index) in teamsList"
          :key="index"
          :team="team"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from 'lodash';
import { Component, Vue } from 'vue-property-decorator';

import Team from './partials/Team.vue';
import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import { CategoryInterface, TeamInterface } from '@/interfaces/interfaces';

@Component({
  components: { Team, CategoriesFilter }
})
export default class Teams extends Vue {
  private teams: TeamInterface[] = this.$parent.$data.data.teams;
  private categories: CategoryInterface[] = this.$parent.$data.data.categories || [];
  private selectedCategory: CategoryInterface = this.categories && this.categories[0];

  private setSelectedCategory(category: CategoryInterface) {
    this.selectedCategory = category;
  }

  get teamsList() {
    let teamsList = this.teams;

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      teamsList = this.teams.filter((team) => {
        return team.category.toLowerCase() === this.selectedCategory.description.toLowerCase();
      });
    }

    return _.sortBy(teamsList, ['category', 'name']);
  }
}
</script>

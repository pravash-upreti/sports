<template>
  <div>
    <div class="filters-wrapper">
      <div class="container">
        <categories-filter
          v-if="categories && categories.length"
          :categories="categories"
          :selected-category="selectedCategory"
          :change-selected-category="setSelectedCategory"
        />
        <search-bar
          :place-holder="'Search teams/players'"
          :search-keyword="searchKeyword"
          :set-search-keyword="setSearchKeyword"
        />
      </div>
    </div>
    <div class=" container teams-wrapper tournament-content">
      <team
        v-for="(team, index) in teamsList"
        :key="index"
        :team="team"
      />
    </div>
  </div>
</template>

<script lang="ts">
import _ from 'lodash';
import { Component, Vue } from 'vue-property-decorator';

import Team from './partials/Team.vue';
import SearchBar from '@/components/common/SearchBar.vue';
import { searchTeamsByKeyword } from '@/services/TeamService';
import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import { CategoryInterface, TeamInterface } from '@/interfaces/interfaces';

@Component({
  components: { Team, SearchBar, CategoriesFilter }
})
export default class Teams extends Vue {
  private searchKeyword: string = '';
  private teams: TeamInterface[] = this.$parent.$data.data.teams;
  private categories: CategoryInterface[] = this.$parent.$data.data.categories || [];
  private selectedCategory: CategoryInterface = this.categories && this.categories[0];

  private setSelectedCategory(category: CategoryInterface) {
    this.selectedCategory = category;
  }

  private setSearchKeyword(keyword: string) {
    this.searchKeyword = keyword || '';
  }

  get teamsList() {
    let teamsList = this.teams;

    if (this.searchKeyword && this.searchKeyword.length) {
      teamsList = searchTeamsByKeyword(teamsList, this.searchKeyword);
    }

    if (this.selectedCategory && this.selectedCategory.id !== 0) {
      teamsList = teamsList.filter((team) => {
        return team.category.toLowerCase() === this.selectedCategory.description.toLowerCase();
      });
    }

    return _.sortBy(teamsList, ['category', 'name']);
  }
}
</script>

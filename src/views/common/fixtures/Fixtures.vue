<template>
  <div class="container">
    <div v-if="!fixtures.length">
      <p class="alert">All fixtures have been played. Please checkout the results section.</p>
    </div>
    <div v-else>
      <p v-if="!fixtures.length" class="alert">No fixtures found.</p>
      <score-cards-list :fixtures="fixtures" :fixture-link="fixtureLink"/>
    </div>
  </div>
</template>

<script lang="ts">
import sortBy from 'lodash/sortBy';
import { Component, Vue } from 'vue-property-decorator';

import { FixtureInterface, CategoryInterface, RoundInterface } from '@/interfaces/interfaces';
import SearchBar from '@/components/common/SearchBar.vue';
import RoundsFilter from '@/components/common/RoundsFilter.vue';
import { searchFixturesByKeyword } from '@/services/FixtureService';
import CategoriesFilter from '@/components/common/CategoriesFilter.vue';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { RoundsFilter, ScoreCardsList, CategoriesFilter, SearchBar }
})
export default class Fixtures extends Vue {
  private fixtureLink: string = this.$parent.$data.fixtureLink;
  private fixtures: FixtureInterface[] = this.$parent.$data.data.data.fixtures;
}
</script>

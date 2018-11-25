<template>
  <div class="container">
    <h3>Search results for <i>{{ keyword }}</i></h3>
    <div v-if="!searchResults.length">
      <p class="alert">No matched fixtures found.</p>
    </div>
    <div v-else>
      <score-cards-list :fixtures="searchResults" :fixture-link="fixtureLink" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

import { FixtureInterface, TeamInterface } from '@/interfaces/interfaces';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList }
})
export default class SearchResults extends Vue {
  private keyword: string = '';
  private fixtureLink: string = this.$parent.$data.fixtureLink;
  private allFixtures: FixtureInterface[] = this.$parent.$data.data.allFixtures;

  @Watch('$route', { immediate: true, deep: true })
  public onUrlChange(newVal: any) {
    this.setKeyword(this.$route.query.keyword);
  }

  private setKeyword(keyword: string = '') {
    this.keyword = keyword;
  }

  private checkIfPlayerIsInTeam(team: TeamInterface, playerName: string) {
    const players = team.players || [];

    return players.some((player) => {
      return player.name.toLowerCase().indexOf(playerName) >= 0;
    });
  }

  get searchResults() {
    let searchResults: FixtureInterface[] = [];

    searchResults = this.allFixtures.filter((fixture) => {
      return fixture.homeTeam.name.toLowerCase().indexOf(this.keyword) >= 0 ||
        fixture.awayTeam.name.toLowerCase().indexOf(this.keyword) >= 0 ||
        this.checkIfPlayerIsInTeam(fixture.homeTeam, this.keyword) ||
        this.checkIfPlayerIsInTeam(fixture.awayTeam, this.keyword);
    });

    return searchResults;
  }
}
</script>

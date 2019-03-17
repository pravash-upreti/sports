<template>
  <div>
    <p v-if="!showTreeStrucure">Please select one specific category.</p>
    <p v-else-if="!data.allFixtures.length">No fixtures available.</p>
    <div v-else class="knockout-wrapper">
      <div
        v-for="(group, index) in groupedFixtures"
        :key="`grouped-fixtures-${index}`"
      >
        <p class="score-card-list-title">{{ group.round.description }}</p>
        <div
          v-for="(fixture, fIndex) in group.fixtures"
          :key="`grouped-fixture-${fIndex}`"
          class="score-card-wrapper"
        >
          <ScoreCardMobile
            :showDetails="false"
            :showFullName="false"
            :fixture="fixture"
            :showFixtureModal="() => null"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { chain, find, uniqBy, cloneDeep } from 'lodash';
import { Vue, Component, Prop } from 'vue-property-decorator';

import TeamLogo from '@/components/common/team-logo/TeamLogo.vue';
import { RoundInterface, FixtureInterface } from '@/interfaces/interfaces';
import ScoreCardMobile from '@/components/common/score-card/partials/ScoreCardMobile.vue';

@Component({
  components: { TeamLogo, ScoreCardMobile }
})
export default class FixturesKnockout extends Vue {
  @Prop() private data!: any;

  private getRoundInfoByName(name: string): any {
    return find(this.data.rounds, { description: name }) || null;
  }

  get showTreeStrucure(): boolean {
    const categories = uniqBy(this.data.allFixtures, 'categoryType');

    return categories && categories.length > 1 ? false : true;
  }

  get groupedFixtures() {
    const fixtures = cloneDeep(this.data.allFixtures);

    return chain(fixtures)
      .map((f) => Object.assign(f, { roundInfo: this.getRoundInfoByName(f.round) }))
      .groupBy('round')
      .map((g) => ({ round: g[0].roundInfo, fixtures: g }))
      .sortBy('round.sortOrder')
      .value();
  }
}
</script>

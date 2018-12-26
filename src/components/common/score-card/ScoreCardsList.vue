<template>
  <div v-if="fixtures.length" :class="scoreCardListWrapperClass">
    <div class="score-card-list-title-wrapper">
      <h5 v-if="title && title.length" class="score-card-list-title">{{ title }}</h5>
    </div>
    <ScoreCardWrapper
      v-for="(fixture, index) in fixtures"
      :fixture="fixture"
      :fixture-link="fixtureLink"
      :key="`score-card-wrapper-${index}`"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { FixtureInterface } from '@/interfaces/interfaces';
import ScoreCardWrapper from '@/components/common/score-card/ScoreCardWrapper.vue';

@Component({
  components: { ScoreCardWrapper }
})
export default class ScoreCardList extends Vue {
  @Prop()
  public title!: string;
  @Prop()
  public fixtureLink!: string;
  @Prop()
  public fixtures!: FixtureInterface[];

  get scoreCardListWrapperClass() {
    return {
      'score-card-list-wrapper': true,
      'score-card-list-wrapper--single': (this.fixtures.length === 1)
    };
  }
}
</script>

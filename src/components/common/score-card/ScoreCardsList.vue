<template>
  <div v-if="fixtures.length">
    <div class="score-card-list-title-wrapper">
      <h5 v-if="title.length" class="score-card-list-title">{{ title }}</h5>
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
  @Prop({ default: '' })
  public title!: string;
  @Prop()
  public fixtureLink!: string;
  @Prop()
  public fixtures!: FixtureInterface[];
}
</script>

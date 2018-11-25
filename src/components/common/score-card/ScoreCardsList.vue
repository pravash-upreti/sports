<template>
  <div v-if="fixtures.length">
    <h5 
      v-if="title.length" 
      class="group-heading"
    >
      {{ title }}
    </h5>
    <ScoreCardWrapper
      v-for="(fixture, index) in fixtures"
      :fixture="fixture"
      :fixture-link="fixtureLink"
      :key="index"
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
  @Prop({ default: '' }) public title!: string;
  @Prop() public fixtureLink!: string;
  @Prop() public fixtures!: FixtureInterface[];
}
</script>

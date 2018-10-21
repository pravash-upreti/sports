<template>
  <div v-if="fixtures.length">
    <h5 
      v-if="title.length" 
      class="group-heading"
    >
      {{ title }}
    </h5>
    <score-card
      v-for="(fixture, index) in fixtures"
      :fixture="fixture"
      :fixture-link="fixtureLink"
      :key="index"
    />
  </div>
</template>


<script>
import ScoreCard from './ScoreCard';

export default {
  components: { ScoreCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    fixtures: {
      type: Array,
      default: function() {
        return [];
      }
    },
    fixtureLink: {
      type: String,
      default: ''
    }
  }
};
</script>

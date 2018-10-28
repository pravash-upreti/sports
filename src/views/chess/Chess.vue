<template>
  <div class="container text-center">
    <h1>Chess</h1>
    <p>Under construction...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EventBus from '@/events/eventBus';

@Component
export default class Chess extends Vue {
  public created() {
    EventBus.$emit('change-logo-title', 'Chess');
  }
}
</script>

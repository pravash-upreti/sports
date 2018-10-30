<template>
  <div class="container text-center">
    <h1>Table Tennis</h1>
    <p>Coming soon...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EventBus from '@/events/eventBus';

@Component
export default class TableTennis extends Vue {
  public created() {
    EventBus.$emit('change-logo-title', 'Table Tennis');
  }
}
</script>

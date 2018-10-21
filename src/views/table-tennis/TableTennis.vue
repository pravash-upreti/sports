<template>
  <div class="container text-center">
    <h1>Table Tennis</h1>
    <p>Under construction...</p>
  </div>
</template>

<script>
import EventBus from '../../events/eventBus';

export default {
  name: 'TableTennis',
  created: function() {
    EventBus.$emit('change-logo-title', 'Table Tennis');
  }
};
</script>

<template>
  <div class="container text-center">
    <h1>Chess</h1>
    <p>Under construction...</p>
  </div>
</template>

<script>
import EventBus from '../../events/eventBus';

export default {
  name: 'Chess',
  created: function() {
    EventBus.$emit('change-logo-title', 'Chess');
  }
};
</script>

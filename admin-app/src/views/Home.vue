<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <Logo/>
      </a-layout-header>
      <a-layout-content>Content</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'Home',
  components: {
    Logo
  }
};
</script>

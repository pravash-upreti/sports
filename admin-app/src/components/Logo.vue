<template>
  <div>
    <a href="/" class="logo-wrapper">
      <img v-bind:src="logo" class="logo" alt="sports" />
    </a>
  </div>
</template>

<script>
import invertedLogo from '@/assets/images/logo.svg';

export default {
  name: 'Logo',
  data() {
    return {
      logo: invertedLogo
    };
  }
};
</script>

<style lang="scss" scoped>
.logo-wrapper {
  display: inline-block;

  .logo {
    display: inline-block;
    width: 200px;
  }
}
</style>

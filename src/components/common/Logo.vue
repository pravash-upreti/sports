<template>
  <div class="logo-wrapper">
    <img :src="logo" class="logo" alt="sports">
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

import { invertedLogo } from '@/assets/images';

export default class Logo extends Vue {
  public logo: string = invertedLogo;
}
</script>

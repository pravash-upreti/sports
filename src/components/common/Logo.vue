<template>
  <div class="logo-wrapper">
    <a href="/"><img :src="logo" class="logo" alt="sports"></a>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

import { invertedLogo } from '@/assets/images';

export default class Logo extends Vue {
  public logo: string = invertedLogo;
}
</script>

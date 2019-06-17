<template>
  <div class="top-navbar">
    <div v-if="!showSideBar" class="menu-bar" @click="showHideSideBar(true)">
      <i class="fas fa-bars"/>
    </div>
    <div v-else class="menu-bar" @click="showHideSideBar(false)">
      <i class="fas fa-times"/>
    </div>
    <Logo/>
    <div class="menu-bar--right"/>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

import Logo from '@/components/common/Logo.vue';

@Component({
  components: { Logo }
})
export default class TopNavBar extends Vue {
  @Prop() public showSideBar!: boolean;
  @Prop() public showHideSideBar!: any;
}
</script>

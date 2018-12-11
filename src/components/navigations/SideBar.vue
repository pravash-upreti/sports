<template>
  <div :class="['sidebar-wrapper', classes]" @click="showHideSideBar(false)">
    <div class="sidebar" @click.stop.prevent="">
      <Logo />
      <ul class="sidebar-menu">
        <li
          v-for="(sideBar, index) in sideBarData"
          :key="`sidebar-${index}`"
          class="sidebar-menu-item"
        ><i :class="[sideBar.icon]"></i>{{ sideBar.name }}
          <ul class="sidebar-submenu">
            <li
              v-for="(season, index) in sideBar.seasons"
              :key="`season-${index}`"
              class="sidebar-submenu-item"
            ><router-link to="#" exact-active-class="active" exact>{{ season }}</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import SideBarData from '@/constants/sideBar';
import Logo from '@/components/common/Logo.vue';

@Component({
  components: { Logo }
})
export default class SideBar extends Vue {
  @Prop() public classes!: object;
  @Prop() public showHideSideBar!: any;

  public sideBarData: object[] = SideBarData;
}
</script>

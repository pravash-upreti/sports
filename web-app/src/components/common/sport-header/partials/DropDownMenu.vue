<template>
  <div class="sport-sub-header-wrapper sport-sub-header-wrapper--drop-down">
    <div class="sport-menu-wrapper">
      <div class="select-wrapper">
        <select>
          <option
            v-for="(route, index) in subRoutes"
            :key="index"
            :value="route.path"
          >{{ route.name }}</option>
        </select>
      </div>
      <div class="select-wrapper">
        <select>
          <option
            v-for="(round, index) in rounds"
            :key="index"
            :value="round.id"
          >{{ round.description }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class DropDownMenu extends Vue {
  @Prop() public rounds!: any;
  @Prop() public subRoutes!: any;
}
</script>


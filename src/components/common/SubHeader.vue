<template>
  <div id="subHeader" class="sub-header-wrapper">
    <div class="sub-header">
      <ul class="nav nav--secondary container">
        <li v-for="(route, index) in subRoutes" :key="index">
          <router-link :to="route.path" exact-active-class="active" exact>{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SubHeader extends Vue {
  @Prop() private routes!: any;

  public getRouteName(routeKey: string): string {
    let routeName = '';

    switch (routeKey.toLowerCase()) {
      case 'home':
        routeName = 'Home';
        break;
      case 'fixtures':
        routeName = 'Fixtures';
        break;
      case 'results':
        routeName = 'Results';
        break;
      case 'teams':
        routeName = 'Teams';
        break;
      case 'points':
        routeName = 'Points';
        break;
      case 'stats':
        routeName = 'Stats';
        break;
    }

    return routeName;
  }

  get subRoutes() {
    const subRoutes = [];
    const keys = Object.keys(this.routes);

    for (const key of keys) {
      // Exclude unnecessary routes for sub-header
      if (key.toLowerCase() !== 'fixture') {
        subRoutes.push({
          path: this.routes[key],
          name: this.getRouteName(key)
        });
      }
    }

    return subRoutes;
  }
}
</script>

<style>
</style>

<template>
  <div id="sport-header" class="sport-header-wrapper">
    <div class="sport-header">
      <h2 class="sport-title">{{ title }}</h2>
      <div class="sport-categories-wrapper">
        <div class="select-wrapper sport-categories">
          <select>
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.id"
            >{{ category.description }}</option>
          </select>
        </div>
      </div>
      <div class="sport-sub-header-wrapper">
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
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class SportHeader extends Vue {
  @Prop() private title!: string;
  @Prop() private routes!: any;
  @Prop() private rounds!: any;
  @Prop() private categories!: any;

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

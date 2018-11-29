<template>
  <div class="container text-center tournament-content">
    <router-link
      v-for="(route, index) in routes"
      :key="`other-games-${index}`"
      @click.native="toggleContentView"
      :to="route.path"
    >
      <div class="game-card game-card-cup">
        <h3 class="title">{{ route.name }}</h3>
        <div class="description">{{ route.description }}</div>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import {Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GamesList extends Vue {
  @Prop() private routes!: object[];
  @Prop() private toggleContentView!: void;
}
</script>


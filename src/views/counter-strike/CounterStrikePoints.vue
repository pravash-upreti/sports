<template>
  <div class="container">
    <table class="table table--striped points-wrapper">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(point, index) in data.points"
          :key="index"
        >
          <td>{{ point.id }}</td>
          <td>{{ point.team.name }}</td>
          <td>{{ point.played }}</td>
          <td>{{ point.won }}</td>
          <td>{{ point.drawn }}</td>
          <td>{{ point.lost }}</td>
          <td>{{ point.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class CounterStrikePoints extends Vue {
  @Prop() private data!: any;
}
</script>

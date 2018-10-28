<template>
  <div class="container">
    <table class="table table-striped points-table">
      <thead>
        <tr>
          <th class="point-rank">#</th>
          <th>Team</th>
          <th class="point-stat">P</th>
          <th class="point-stat">W</th>
          <th class="point-stat">D</th>
          <th class="point-stat">L</th>
          <th class="point-stat hide-on-small-screen">GF</th>
          <th class="point-stat hide-on-small-screen">GA</th>
          <th class="point-stat">GD</th>
          <th class="point-stat">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(point, index) in points"
          :key="index"
        >
          <td class="point-rank">{{ point.id }}</td>
          <td>{{ point.team.name }}</td>
          <td class="point-stat">{{ point.played }}</td>
          <td class="point-stat">{{ point.won }}</td>
          <td class="point-stat">{{ point.drawn }}</td>
          <td class="point-stat">{{ point.lost }}</td>
          <td class="point-stat hide-on-small-screen">{{ point.goalsFor }}</td>
          <td class="point-stat hide-on-small-screen">{{ point.goalsAgainst }}</td>
          <td class="point-stat">{{ point.goalDifference }}</td>
          <td class="point-stat">{{ point.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { PointInterface } from '@/interfaces/interfaces';

@Component
export default class FutsalPoints extends Vue {
  public points: PointInterface[] = this.$parent.$data.data.points;
}
</script>

<template>
  <div>
    <p v-if="!data.points.length" class="alert">Nothing to show here at the moment.</p>
    <div v-else class="points-table-wrapper">
      <table class="table table--striped points-wrapper">
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>RW</th>
            <th>RL</th>
            <th>RD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(point, index) in data.points" :key="index">
            <td>{{ point.id }}</td>
            <td class="points-team-name-wrapper">
              <TeamLogo :team="point.team"/>
              {{ point.team.name }}
            </td>
            <td>{{ point.played }}</td>
            <td>{{ point.won }}</td>
            <td>{{ point.drawn }}</td>
            <td>{{ point.lost }}</td>
            <td>{{ point.roundsWon }}</td>
            <td>{{ point.roundsLost }}</td>
            <td>{{ point.roundsDifference }}</td>
            <td>{{ point.points }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import TeamLogo from '@/components/common/team-logo/TeamLogo.vue';

@Component({
  components: { TeamLogo }
})
export default class CounterStrikePoints extends Vue {
  @Prop() private data!: any;
}
</script>

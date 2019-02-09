<template>
  <div class="points-table-wrapper">
    <table class="table table--striped points-wrapper">
      <thead>
        <tr>
          <th>#</th>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>L</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(point, index) in data.points" :key="index">
          <td>{{ point.id }}</td>
          <td class="points-team-name-wrapper">
            <TeamLogo :participant="point.team"/>
            {{ point.team.name }}
          </td>
          <td>{{ point.played }}</td>
          <td>{{ point.won }}</td>
          <td>{{ point.lost }}</td>
          <td>{{ point.points }}</td>
        </tr>
      </tbody>
    </table>
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

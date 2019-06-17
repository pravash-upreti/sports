<template>
  <div v-if="showModal" class="modal-wrapper" @click="close">
    <div class="modal container" @click="doNothing">
      <div class="modal-close" @click="close">
        <i class="fa fa-times"/>
      </div>
      <div v-if="!fixture">
        <div class="modal-title">Fixture not found.</div>
      </div>
      <div v-else>
        <div class="modal-title">
          <div class="modal-fixture-date">
            <span class="fixture-date">{{ fixtureDate }}</span>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-teams-wrapper">
            <div :class="['modal-team', getWinnerClassObject(fixture.homeTeam)]">
              <div class="modal-team-players">
                <TeamLogo :team="fixture.homeTeam" :showLarge="true"/>
              </div>
              <p class="text-center">{{ fixture.homeTeam.name }}</p>
            </div>
            <div class="modal-score">
              <span v-if="isFixturePlayed">
                <span :class="getWinnerClassObject(fixture.homeTeam)">{{ fixture.homeTeamScore }}</span> :
                <span :class="getWinnerClassObject(fixture.awayTeam)">{{ fixture.awayTeamScore }}</span>
              </span>
              <span v-else>VS</span>
            </div>
            <div :class="['modal-team', getWinnerClassObject(fixture.awayTeam)]">
              <div class="modal-team-players">
                <TeamLogo :team="fixture.awayTeam" :showLarge="true"/>
              </div>
              <p class="text-center">{{ fixture.awayTeam.name }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <p v-if="isFixtureCancelled" class="text-center">This fixture has been cancelled.</p>
          <p v-else-if="!isFixturePlayed" class="text-center">This fixture is yet to be played.</p>
          <p
            v-else-if="!fixture.activities.length"
            class="text-center"
          >No extra information available.</p>
          <div v-else class="modal-fixture-activities-wrapper">
            <FutsalActivities :activities="fixture.activities"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dateFns from 'date-fns';
import { Component, Vue, Prop } from 'vue-property-decorator';

import TeamLogo from '@/components/common/team-logo/TeamLogo.vue';
import FutsalActivities from '@/components/futsal/FutsalActivities.vue';
import { isFixturePlayed, isFixtureCancelled } from '@/services/FixtureService';
import { FixtureInterface, TeamInterface, ActivityInterface } from '@/interfaces/interfaces';

@Component({
  components: { TeamLogo, FutsalActivities }
})
export default class FutsalScoreModal extends Vue {
  @Prop() public triggerShowModal!: any;

  @Prop({ default: false }) private showModal!: boolean;
  @Prop({ default: null }) private fixture!: FixtureInterface;

  public close() {
    this.triggerShowModal(false);
  }

  public doNothing(e: any) {
    e.stopPropagation();
  }

  public isTeamWinner(team: TeamInterface) {
    const winnerTeam =
      this.fixture && this.fixture.homeTeamScore > this.fixture.awayTeamScore
        ? this.fixture && this.fixture.homeTeam
        : this.fixture && this.fixture.awayTeam;

    return winnerTeam && team.id === winnerTeam.id;
  }

  public getWinnerClassObject(team: TeamInterface) {
    return this.isFixturePlayed && this.isTeamWinner(team) ? { 'winner-team': true } : {};
  }

  get isFixturePlayed() {
    return isFixturePlayed(this.fixture);
  }

  get isFixtureCancelled() {
    return isFixtureCancelled(this.fixture);
  }

  get fixtureDate() {
    return this.fixture && dateFns.format(new Date(this.fixture.date), 'dddd MMM D, YYYY, hh:mm A');
  }
}
</script>

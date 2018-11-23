<template>
  <div 
    class="modal-wrapper"
    @click="close"
  >
    <div 
      class="modal"
      @click="doNothing"
    >
      <div 
        class="modal-close"
        @click="close"
      >X</div>
      <div v-if="error">
        <div class="modal-title">Fixture not found.</div>
      </div>
      <div v-else>
        <div class="modal-title">
          <div class="modal-fixture-date"><span class="fixture-date">{{ fixtureDate }}</span></div>
          <div class="modal-row">
            <div>
              <div class="col-md-12 score-wrapper">
                <div class="col col-sm-4 col-md-5 team">
                  <participant-logo :participant="fixture.homeTeam" />
                </div>
                <div class="col col-sm-4 col-md-2 score">
                  <span :class="getWinnerClassObject(fixture.homeTeam)">{{ fixture.homeTeamScore }}</span> - <span :class="getWinnerClassObject(fixture.awayTeam)">{{ fixture.awayTeamScore }}</span>
                </div>
                <div class="col col-sm-4 col-md-5 team">
                  <participant-logo :participant="fixture.awayTeam" />
                </div>
              </div>
              <div class="col-md-12 score-wrapper">
                <div class="col col-md-5 team">
                  <p :class="['team-name', getWinnerClassObject(fixture.homeTeam)]">{{ fixture.homeTeam.name }}</p>
                </div>
                <div class="col col-md-2 score hidden">
                  <span :class="getWinnerClassObject(fixture.homeTeam)">{{ fixture.homeTeamScore }}</span> - <span :class="getWinnerClassObject(fixture.awayTeam)">{{ fixture.awayTeamScore }}</span>
                </div>
                <div class="col col-md-5 team">
                  <p :class="['team-name', getWinnerClassObject(fixture.awayTeam)]">{{ fixture.awayTeam.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <div v-if="!isFixturePlayed">
            <div class="modal-row">This fixture is yet to be played.</div>
          </div>
          <div v-else-if="!fixture.activities.length">
            <div class="modal-row">No info available.</div>
          </div>
          <div v-else>
            <futsal-activities :activities="fixture.activities" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import dateFns from 'date-fns';
import { Component, Vue } from 'vue-property-decorator';

import ParticipantLogo from '@/components/common/ParticipantLogo.vue';
import FutsalActivities from '@/components/futsal/FutsalActivities.vue';
import { FixtureInterface, TeamInterface, ActivityInterface } from '@/interfaces/interfaces';

@Component({
  components: { ParticipantLogo, FutsalActivities }
})
export default class FutsalScoreModal extends Vue {
  public error: boolean =  false;
  public fixture: FixtureInterface | null = null;

  public created() {
    const fixtureId = parseInt(this.$route.params.fixtureId, 10);
    const allFixtures = this.$parent.$data.data.allFixtures;

    this.setFixture(allFixtures, fixtureId);
  }

  public close() {
    if (window.history.length > 2) {
      this.$router.go(-1);
    } else {
      this.$router.push(this.$route.matched[0]);
    }
  }

  public doNothing(e: any) {
    e.stopPropagation();
  }

  public setFixture(fixtures: FixtureInterface[], fixtureId: number) {
    const fixture = fixtures.find((f) => (f.id === fixtureId));

    if (!fixture) {
      this.error = true;

      return;
    }

    this.fixture = fixture;
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
    return this.fixture && this.fixture.status.toLowerCase() === 'played';
  }

  get fixtureDate() {
    return this.fixture && dateFns.format(new Date(this.fixture.date), 'dddd MMM D, YYYY, hh:mm A');
  }
}
</script>

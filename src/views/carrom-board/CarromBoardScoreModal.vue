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
          <div class="row modal-fixture-date">{{ fixture.round }}, {{ fixtureDate }}</div>
          <div class="modal-row">
            <div class="col col-xs-12 team-wrapper">
              <div class="mobile">
                <div :class="['col-xs-12 home-team', getWinnerClassObject(fixture.homeTeam)]">
                  <div class="col col-xs-10">
                    <div 
                      v-for="(player, index) in fixture.homeTeam.players"
                      :key="index"
                      class="modal-team-name"
                    ><team-logo :participant="player" />{{ player.name }}</div>
                  </div>
                  <div
                    v-if="isFixturePlayed"
                    class="col col-xs-2 team-score"
                  >{{ fixture.homeTeamScore }}</div>
                </div>
                <div :class="['col-xs-12 away-team', getWinnerClassObject(fixture.awayTeam)]">
                  <div class="col col-xs-10">
                    <div 
                      v-for="(player, index) in fixture.awayTeam.players"
                      :key="index"
                      class="modal-team-name col-xs-12"
                    ><team-logo :participant="player" />{{ player.name }}</div>
                  </div>
                  <div
                    v-if="isFixturePlayed"
                    class="col col-xs-2 team-score"
                  >{{ fixture.awayTeamScore }}</div>
                </div>
              </div>
              <div class="desktop">
                <div :class="['col-md-5 home-team', getWinnerClassObject(fixture.homeTeam)]">
                  <div 
                    v-for="(player, index) in fixture.homeTeam.players"
                    :key="index"
                    class="modal-team-name col-md-12"
                  >{{ player.name }}<team-logo :participant="player" /></div>
                </div>
                <div class="col-md-2 team-score">
                  <div class="col">
                    <div v-if="isFixturePlayed">{{ fixture.homeTeamScore }} - {{ fixture.awayTeamScore }}</div>
                    <div v-else>vs</div>
                  </div>
                </div>
                <div :class="['col-md-5 away-team', getWinnerClassObject(fixture.awayTeam)]">
                  <div 
                    v-for="(player, index) in fixture.awayTeam.players"
                    :key="index"
                    class="modal-team-name col-md-12"
                  ><team-logo :participant="player" />{{ player.name }}</div>
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
            <table>
              <tbody>
                <tr>
                  <th>Team</th>
                  <th 
                    v-for="(activity, index) in fixture.activities"
                    :key="index"
                    class="activity-points"
                  >R{{ index + 1 }}</th>
                  <th class="activity-points total-points">Total</th>
                </tr>
                <tr>
                  <td>{{ fixture.homeTeam.name }}</td>
                  <td
                    v-for="(activity, index) in fixture.activities"
                    :key="index"
                    class="activity-points"
                  >{{ getHomeTeamActivityScore(activity) }}</td>
                  <td :class="['activity-points total-points', getWinnerClassObject(fixture.homeTeam)]">{{ fixture.homeTeamScore }}</td>
                </tr>
                <tr>
                  <td>{{ fixture.awayTeam.name }}</td>
                  <td
                    v-for="(activity, index) in fixture.activities"
                    :key="index"
                    class="activity-points"
                  >{{ getAwayTeamActivityScore(activity) }}</td>
                  <td :class="['activity-points total-points', getWinnerClassObject(fixture.awayTeam)]">{{ fixture.awayTeamScore }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateFns from 'date-fns';

import TeamLogo from '../../components/common/TeamLogo';

export default {
  name: 'CarromBoardScoreModal',
  components: { TeamLogo },
  data: function() {
    return {
      fixture: {},
      error: false
    };
  },
  computed: {
    isFixturePlayed: function() {
      return this.fixture.status.toLowerCase() === 'played';
    },

    fixtureDate: function() {
      return dateFns.format(new Date(this.fixture.date), 'dddd MMM D, YYYY, hh:mm A');
    }
  },
  created: function() {
    const fixtureId = this.$route.params.fixtureId;
    const allFixtures = this.$parent.data.allFixtures;

    this.setFixture(allFixtures, fixtureId);
  },
  methods: {
    close() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push(this.$route.matched[0]);
      }
    },

    doNothing: function(e) {
      e.stopPropagation();
    },

    setFixture(fixtures, fixtureId) {
      const fixture = fixtures.find(function(f) {
        return parseInt(f.id, 10) === parseInt(fixtureId, 10);
      });

      if (!fixture) {
        this.error = true;

        return;
      }

      this.fixture = fixture;
    },

    isTeamWinner: function(team) {
      const winnerTeam =
        parseInt(this.fixture.homeTeamScore, 10) > parseInt(this.fixture.awayTeamScore)
          ? this.fixture.homeTeam
          : this.fixture.awayTeam;

      return parseInt(team.id, 10) === parseInt(winnerTeam.id, 10);
    },

    getWinnerClassObject: function(team) {
      return this.isFixturePlayed && this.isTeamWinner(team) ? { 'winner-team': true } : {};
    },

    getHomeTeamActivityScore: function(activity) {
      return activity.team === this.fixture.homeTeam.name ? activity.points : ' - ';
    },

    getAwayTeamActivityScore: function(activity) {
      return activity.team === this.fixture.awayTeam.name ? activity.points : ' - ';
    }
  }
};
</script>

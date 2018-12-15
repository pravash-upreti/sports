<template>
  <div v-if="noRecentFixtures">
    <p class="alert alert-success">Nothing to see here. Trying other sections.</p>
  </div>
  <div v-else>
    <score-cards-list
      :title="'Today'"
      :fixtures="recentFixtures.todayFixtures"
      :fixture-link="fixtureLink"
    />
    <score-cards-list
      :title="'Tomorrow'"
      :fixtures="recentFixtures.tomorrowFixtures"
      :fixture-link="fixtureLink"
    />
    <score-cards-list
      :title="'Later this week'"
      :fixtures="recentFixtures.twRemainingFixtures"
      :fixture-link="fixtureLink"
    />
    <score-cards-list
      :title="'Next week'"
      :fixtures="recentFixtures.nwFixtures"
      :fixture-link="fixtureLink"
    />
    <score-cards-list
      :title="'Earlier this week'"
      :fixtures="recentFixtures.twPlayedFixtures"
      :fixture-link="fixtureLink"
    />
    <score-cards-list
      :title="'Last week'"
      :fixtures="recentFixtures.lwFixtures"
      :fixture-link="fixtureLink"
    />
    <score-cards-list
      :title="'Upcoming'"
      :fixtures="recentFixtures.upComingFixtures"
      :fixture-link="fixtureLink"
    />
  </div>
</template>

<script lang="ts">
import dateFns from 'date-fns';
import { Component, Vue, Prop } from 'vue-property-decorator';

import { RecentsInterface, FixtureInterface } from '@/interfaces/interfaces';
import ScoreCardsList from '@/components/common/score-card/ScoreCardsList.vue';

@Component({
  components: { ScoreCardsList }
})
export default class RecentFxtures extends Vue {
  @Prop() public recents!: RecentsInterface;
  @Prop() public fixtureLink!: string;

  public noRecentFixtures: boolean = false;
  public recentFixtures: object = {
    todayFixtures: [],
    tomorrowFixtures: [],
    twPlayedFixtures: [],
    twRemainingFixtures: [],
    lwFixtures: [],
    nwFixtures: [],
    upComingFixtures: []
  };

  public created() {
    const recentFixtures = this.recents
      ? this.recents.results.concat(this.recents.fixtures)
      : [];

    if (!recentFixtures.length) {
      this.noRecentFixtures = true;

      return;
    }

    this.noRecentFixtures = false;
    this.recentFixtures = this.getRecentFixtures(recentFixtures);
  }

  public getFixturesForRangeOfDays(
    fixtures: FixtureInterface[],
    firstDay: any,
    lastDay: any
  ) {
    let rangeFixtures: FixtureInterface[] = [];

    if (dateFns.isSameDay(firstDay, lastDay)) {
      rangeFixtures = fixtures.filter((fixture) =>
        dateFns.isSameDay(new Date(fixture.date), firstDay)
      );
    } else {
      rangeFixtures = fixtures.filter((fixture) =>
        dateFns.isWithinRange(new Date(fixture.date), firstDay, lastDay)
      );
    }

    return rangeFixtures.sort((a, b) => {
      return dateFns.compareAsc(a.date, b.date);
    });
  }

  public checkIfFixturesListIsEmpty(fixturesList: any) {
    const keys = Object.keys(fixturesList);

    for (const key of keys) {
      if (fixturesList[key] && fixturesList[key].length) {
        return false;
      }
    }

    return true;
  }

  public getRecentFixtures(recentFixtures: FixtureInterface[]) {
    const today = new Date();

    // Reset time
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    const yesterday = dateFns.subDays(today, 1);
    const tomorrow = dateFns.addDays(today, 1);
    const dayAfterTomorrow = dateFns.addDays(today, 2);
    const todayWeekDay = dateFns.getDay(today);
    const twStartDay = dateFns.startOfWeek(today);
    const twLastDay = dateFns.endOfWeek(today);
    const lwStartDay = dateFns.startOfWeek(dateFns.subWeeks(today, 1));
    const lwEndDay = dateFns.endOfWeek(dateFns.subWeeks(today, 1));
    const nwStartDay = dateFns.startOfWeek(dateFns.addWeeks(today, 1));
    const nwEndDay = dateFns.endOfWeek(dateFns.addWeeks(today, 1));

    const todayFixtures = this.getFixturesForRangeOfDays(recentFixtures, today, today);
    const tomorrowFixtures = this.getFixturesForRangeOfDays(recentFixtures, tomorrow, tomorrow);
    // Display this week played fixtures from Tuesday till end of the week.
    const twPlayedFixtures = todayWeekDay >= 2
        ? this.getFixturesForRangeOfDays(recentFixtures, twStartDay, yesterday)
        : [];
    // Display this week remaining fixtures from Monday till Thursday.
    const twRemainingFixtures = todayWeekDay >= 1 && todayWeekDay <= 4
        ? this.getFixturesForRangeOfDays(recentFixtures, dayAfterTomorrow, twLastDay)
        : [];
    // Display last week fixtures from Sunday till Monday.
    const lwFixtures = todayWeekDay <= 1
        ? this.getFixturesForRangeOfDays(recentFixtures, lwStartDay, lwEndDay)
        : [];
    // Display next week fixtures from Friday till end of the week.
    const nwFixtures = todayWeekDay >= 5
        ? this.getFixturesForRangeOfDays(recentFixtures, nwStartDay, nwEndDay)
        : [];

    let recentFixturesList = {
      todayFixtures,
      tomorrowFixtures,
      twPlayedFixtures,
      twRemainingFixtures,
      lwFixtures,
      nwFixtures,
      upComingFixtures: []
    };

    if (this.checkIfFixturesListIsEmpty(recentFixturesList)) {
      recentFixturesList = Object.assign(recentFixturesList, {
        upComingFixtures: recentFixtures
      });
    }

    return recentFixturesList;
  }
}
</script>

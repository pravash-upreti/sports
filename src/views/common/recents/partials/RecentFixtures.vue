<template>
  <div class="recent-wrapper">
    <div v-if="noRecentFixtures">
      <p class="alert alert-success">Nothing to see here. Trying other sections.</p>
    </div>
    <div v-else>
      <score-cards-list 
        :title="'Today'"
        :fixtures="todayFixtures"
        :fixture-link="fixtureLink"
      />
      <score-cards-list 
        :title="'Tomorrow'"
        :fixtures="tomorrowFixtures"
        :fixture-link="fixtureLink"
      />
      <score-cards-list 
        :title="'Later this week'"
        :fixtures="twRemainingFixtures"
        :fixture-link="fixtureLink"
      />
      <score-cards-list 
        :title="'Next week'"
        :fixtures="nwFixtures"
        :fixture-link="fixtureLink"
      />
      <score-cards-list 
        :title="'Earlier this week'"
        :fixtures="twPlayedFixtures"
        :fixture-link="fixtureLink"
      />
      <score-cards-list 
        :title="'Last week'"
        :fixtures="lwFixtures"
        :fixture-link="fixtureLink"
      />
    </div>
  </div>
</template>

<script>
import dateFns from 'date-fns';

import ScoreCardsList from '../../../../components/common/score-card/ScoreCardsList';

export default {
  components: { ScoreCardsList },
  props: {
    recents: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    },
    fixtureLink: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      noRecentFixtures: false,
      recentFixtures: {
        todayFixtures: [],
        tomorrowFixtures: [],
        twPlayedFixtures: [],
        twRemainingFixtures: [],
        lwFixtures: [],
        nwFixtures: []
      }
    };
  },
  computed: {
    getFixturesForRangeOfDays: function(fixtures, firstDay, lastDay) {
      if (dateFns.isSameDay(firstDay, lastDay)) {
        return fixtures.filter(fixture => dateFns.isSameDay(new Date(fixture.date), firstDay));
      }

      return fixtures.filter(fixture => dateFns.isWithinRange(new Date(fixture.date), firstDay, lastDay));
    },

    getRecentFixtures: function(recentFixtures) {
      const today = new Date();
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

      return {
        todayFixtures: this.getFixturesForRangeOfDays(recentFixtures, today, today),
        tomorrowFixtures: this.getFixturesForRangeOfDays(recentFixtures, tomorrow, tomorrow),
        twPlayedFixtures:
          todayWeekDay >= 2 ? this.getFixturesForRangeOfDays(recentFixtures, twStartDay, yesterday) : [],
        twRemainingFixtures:
          1 <= todayWeekDay && todayWeekDay <= 4
            ? this.getFixturesForRangeOfDays(recentFixtures, dayAfterTomorrow, twLastDay)
            : [],
        lwFixtures: todayWeekDay <= 1 ? this.getFixturesForRangeOfDays(recentFixtures, lwStartDay, lwEndDay) : [],
        nwFixtures: todayWeekDay >= 5 ? this.getFixturesForRangeOfDays(recentFixtures, nwStartDay, nwEndDay) : []
      };
    }
  },
  created: function() {
    const recentFixtures = Object.assign([], this.recents.results.concat(this.recents.fixtures));

    if (!recentFixtures.length) {
      this.noRecentFixtures = true;

      return;
    }

    this.noRecentFixtures = false;
    this.recentFixtures = this.getRecentFixtures(recentFixtures);
  }
};
</script>

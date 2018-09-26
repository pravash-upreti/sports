import React from 'react';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';

import ScoreCard from '../../../scoreCard';

class RecentFixtures extends React.Component {
  getScoreCardEls = fixtures => {
    return fixtures.map(fixture => <ScoreCard key={`score-card-${fixture.id}`} fixture={fixture} />);
  };

  getFixturesForRangeOfDays = (fixtures, firstDay, lastDay) => {
    return fixtures.filter(fixture => dateFns.isWithinRange(new Date(fixture.date), firstDay, lastDay));
  };

  getFixturesWrapperEl = (fixtures, title) => {
    if (!fixtures.length) {
      return null;
    }

    const fixtureEls = this.getScoreCardEls(fixtures);

    return (
      <div className="recent-wrapper">
        <h5 className="recent-date-group-title">{title}</h5>
        {fixtureEls}
      </div>
    );
  };

  render() {
    const recents = this.props.data;
    const recentFixtures = recents.results.concat(recents.fixtures);
    const today = new Date();
    const tomorrow = dateFns.addDays(today, 1);
    const dayAfterTomorrow = dateFns.addDays(today, 2);
    const todayWeekDay = dateFns.getDay(today);
    const twStartDay = dateFns.startOfWeek(today);
    const twLastDay = dateFns.endOfWeek(today);
    const lwStartDay = dateFns.startOfWeek(dateFns.subWeeks(today, 1));
    const lwEndDay = dateFns.endOfWeek(dateFns.subWeeks(today, 1));
    const nwStartDay = dateFns.startOfWeek(dateFns.addWeeks(today, 1));
    const nwEndDay = dateFns.endOfWeek(dateFns.addWeeks(today, 1));

    // Get today's fixtures
    const todayFixtures = this.getFixturesForRangeOfDays(recentFixtures, today, tomorrow);
    // Get tomorrow's fixtures
    const tomorrowFixtures = this.getFixturesForRangeOfDays(recentFixtures, tomorrow, dayAfterTomorrow);
    // Get this week played fixtures
    const twPlayedFixtures = todayWeekDay >= 1 ? this.getFixturesForRangeOfDays(recentFixtures, twStartDay, today) : [];
    // Get this week remaining fixtures
    const twRemainingFixtures =
      todayWeekDay >= 1 ? this.getFixturesForRangeOfDays(recentFixtures, dayAfterTomorrow, twLastDay) : [];
    // Get last week fixtures
    const lwFixtures = todayWeekDay <= 2 ? this.getFixturesForRangeOfDays(recentFixtures, lwStartDay, lwEndDay) : [];
    // Get next week's fixtures
    const nwFixtures = todayWeekDay >= 4 ? this.getFixturesForRangeOfDays(recentFixtures, nwStartDay, nwEndDay) : [];

    return (
      <div>
        {this.getFixturesWrapperEl(todayFixtures, 'Today')}
        {this.getFixturesWrapperEl(tomorrowFixtures, 'Tomorrow')}
        {this.getFixturesWrapperEl(twRemainingFixtures, 'Later this week')}
        {this.getFixturesWrapperEl(nwFixtures, 'Next week')}
        {this.getFixturesWrapperEl(twPlayedFixtures, 'Earlier this week')}
        {this.getFixturesWrapperEl(lwFixtures, 'Last week')}
      </div>
    );
  }
}

RecentFixtures.propTypes = {
  data: PropTypes.object
};

export default RecentFixtures;

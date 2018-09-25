import React from 'react';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

import ScoreCard from '../../scoreCard';

class Recent extends React.Component {
  getScoreCardEls = fixtures => {
    return fixtures.map(fixture => <ScoreCard key={`score-card-${fixture.id}`} fixture={fixture} />);
  };

  getDayFixtures = (recents, date) => {
    const dayResults = recents.results.filter(result => dateFns.isSameDay(date, new Date(result.date)));
    const dayFixtures = recents.fixtures.filter(fixture => dateFns.isSameDay(date, new Date(fixture.date)));

    return dayResults.concat(dayFixtures);
  };

  getDayFixtureEls = (fixtures, date) => {
    if (!fixtures.length) {
      return null;
    }

    const fixtureEls = this.getScoreCardEls(fixtures);
    let dayTitle = null;

    if (dateFns.isToday(date)) {
      dayTitle = 'Today';
    } else if (dateFns.isYesterday(date)) {
      dayTitle = 'Yesterday';
    } else if (dateFns.isTomorrow(date)) {
      dayTitle = 'Tomorrow';
    }

    const headerTitleEl = dayTitle ? <h5 className="recent-date-group-title">{dayTitle}</h5> : null;

    return (
      <div className="recent-wrapper">
        {headerTitleEl}
        {fixtureEls}
      </div>
    );
  };

  getWeekFixtures = (recents, date) => {
    const weekResults = recents.results.filter(result => dateFns.isSameWeek(date, new Date(result.date)));
    const weekFixtures = recents.fixtures.filter(fixture => dateFns.isSameWeek(date, new Date(fixture.date)));

    return weekResults.concat(weekFixtures);
  };

  getWeekFixturesEls = (fixtures, date) => {
    if (!fixtures.length) {
      return null;
    }

    const fixtureEls = this.getScoreCardEls(fixtures);
    let weekTitle = null;
    const today = new Date();
    const weekRange = `
      ${dateFns.format(dateFns.startOfWeek(date), 'MMM D')} - ${dateFns.format(dateFns.endOfWeek(date), 'MMM D')}
    `;

    if (dateFns.isSameWeek(date, today)) {
      weekTitle = 'This week';
    } else if (dateFns.isSameWeek(date, dateFns.subWeeks(today, 1))) {
      weekTitle = 'Last week';
    } else if (dateFns.isSameWeek(date, dateFns.addWeeks(today, 1))) {
      weekTitle = 'Next week';
    }

    const headerTitleEl = weekTitle ? (
      <h5 className="recent-date-group-title">
        {weekTitle}: {weekRange}
      </h5>
    ) : (
      ''
    );

    return (
      <div className="recent-wrapper">
        {headerTitleEl}
        {fixtureEls}
      </div>
    );
  };

  getThisWeekRemainingFixtures = recents => {
    const dayAfterTomorrow = dateFns.addDays(new Date(), 2);
    const lastDayOfThisWeek = dateFns.endOfWeek(dayAfterTomorrow);

    const remainingResults = recents.results.filter(result =>
      dateFns.isWithinRange(result.date, dayAfterTomorrow, lastDayOfThisWeek)
    );
    const remainingFixtures = recents.fixtures.filter(fixture =>
      dateFns.isWithinRange(fixture.date, dayAfterTomorrow, lastDayOfThisWeek)
    );

    return remainingResults.concat(remainingFixtures);
  };

  getThisWeekRemainingFixturesEls = fixtures => {
    if (!fixtures.length) {
      return null;
    }

    const fixtureEls = this.getScoreCardEls(fixtures);

    return (
      <div className="recent-wrapper">
        <h5 className="recent-date-group-title">Later this week</h5>
        {fixtureEls}
      </div>
    );
  };

  render() {
    const recents = this.props.data;

    if (recents.showWinners) {
      return (
        <div>
          <div>
            <h2 className="fixture-title">WINNERS</h2>
            <h1 className="winners">
              <FontAwesomeIcon icon={faMedal} className="winner-trophy" />
              {recents.winner}
              <FontAwesomeIcon icon={faMedal} className="winner-trophy" />
            </h1>
          </div>
          <div>
            <h2 className="fixture-title">RUNNER-UP</h2>
            <h1 className="runner-up">
              <FontAwesomeIcon icon={faMedal} className="runner-up-trophy" />
              {recents.runnerUp}
              <FontAwesomeIcon icon={faMedal} className="runner-up-trophy" />
            </h1>
          </div>
        </div>
      );
    }

    const today = new Date();
    // Get today's fixtures
    const todayFixtures = this.getDayFixtures(recents, today);
    // Get yesterday's fixtures
    const yesterdayFixtures = this.getDayFixtures(recents, dateFns.subDays(today, 1));
    // Get tomorrow's fixtures
    const tomorrowFixtures = this.getDayFixtures(recents, dateFns.addDays(today, 1));
    // Get this week's fixtures
    const thisWeekFixtures = this.getWeekFixtures(recents, today);

    if (!todayFixtures.length && !yesterdayFixtures.length && !tomorrowFixtures.length && !thisWeekFixtures.length) {
      const resultElements = recents.results.map(result => (
        <ScoreCard key={`score-card-${result.id}`} fixture={result} />
      ));
      const fixtureElements = recents.fixtures.map(fixture => (
        <ScoreCard key={`score-card-${fixture.id}`} fixture={fixture} />
      ));
      const resultElWrapper = !resultElements.length ? null : (
        <div>
          <h2 className="fixture-title">RESULTS</h2>
          {resultElements}
        </div>
      );
      const fixtureElWrapper = !fixtureElements.length ? null : (
        <div>
          <h2 className="fixture-title">FIXTURES</h2>
          {fixtureElements}
        </div>
      );

      return (
        <div>
          {resultElWrapper}
          {fixtureElWrapper}
        </div>
      );
    }

    if (!todayFixtures.length && !yesterdayFixtures.length && !tomorrowFixtures.length) {
      return <div>{this.getWeekFixturesEls(thisWeekFixtures, today)}</div>;
    }

    // Get remaining fixtures of the week
    const thisWeekRemainingFixtures = this.getThisWeekRemainingFixtures(recents);

    // Get next week's fixtures
    const nextWeekFirstDay = dateFns.startOfWeek(dateFns.addWeeks(today, 1));
    const nextWeekFixtures =
      dateFns.isThursday(today) || dateFns.isFriday(today) || dateFns.isSaturday(today)
        ? this.getWeekFixtures(recents, nextWeekFirstDay)
        : [];

    return (
      <div>
        {this.getDayFixtureEls(todayFixtures, today)}
        {this.getDayFixtureEls(tomorrowFixtures, dateFns.addDays(today, 1))}
        {this.getDayFixtureEls(yesterdayFixtures, dateFns.subDays(today, 1))}
        {this.getThisWeekRemainingFixturesEls(thisWeekRemainingFixtures)}
        {this.getWeekFixturesEls(nextWeekFixtures, nextWeekFirstDay)}
      </div>
    );
  }
}

Recent.propTypes = {
  data: PropTypes.object
};

export default Recent;

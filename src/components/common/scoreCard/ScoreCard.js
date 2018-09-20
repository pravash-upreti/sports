import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import FixtureTeam from './partials/FixtureTeam';
import FixtureDate from './partials/FixtureDate';
import FixtureInfo from './partials/FixtureInfo';
import FixtureResult from './partials/FixtureResult';

class ScoreCard extends Component {
  parseFixtureDate = fixtureDate => {
    let fDate = moment(fixtureDate).local();
    let today = moment.now();
    let dateDiff = fDate.diff(today, 'days');

    let weekDay = fDate.format('dddd');

    if (dateDiff === 0) {
      weekDay = 'Today';
    } else if (dateDiff === 1) {
      weekDay = 'Tomorrow';
    } else if (dateDiff === -1) {
      weekDay = 'Yesterday';
    }

    let minutes = fDate.format('mm');
    let hours = fDate.format('HH');
    let hour = hours > 12 ? `${hours - 12}` : `${hours}`;
    let amPm = hours >= 12 ? `PM` : `AM`;

    return {
      weekDay: weekDay,
      date: fDate.format('D MMMM'),
      time: `${hour}:${minutes} ${amPm}`
    };
  };

  handleClick = () => {
    if (this.props.fixture.status.toLowerCase() === 'played' && this.props.fixture.activities) {
      this.props.updateShowModalData(this.props.fixture);
      this.props.toggleModal(true);
    }
  };

  render() {
    let fixture = this.props.fixture;
    let fixtureInfo = fixture.round
      ? [fixture.categoryType, fixture.round]
      : ['HALF-TIME', `${fixture.homeTeamHalfTimeScore} - ${fixture.homeTeamHalfTimeScore}`];
    let fixtureDate = this.parseFixtureDate(fixture.date);

    return (
      <div className="score-card-wrapper">
        <div className="score-card" onClick={this.handleClick}>
          <div className="score-brief">
            <FixtureDate fixtureDate={fixtureDate} />
            <FixtureTeam team={fixture.homeTeam} classNames="home-team text-right" />
            <FixtureResult fixture={fixture} />
            <FixtureTeam team={fixture.awayTeam} classNames="away-team text-left" />
            <FixtureInfo fixtureInfo={fixtureInfo} />
          </div>
          <div className="score-details" />
        </div>
      </div>
    );
  }
}

ScoreCard.propTypes = {
  fixture: PropTypes.object,
  toggleModal: PropTypes.func,
  updateShowModalData: PropTypes.func
};

export default ScoreCard;

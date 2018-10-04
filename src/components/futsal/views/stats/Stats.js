import React from 'react';
import PropTypes from 'prop-types';

import Stat from './partials/Stat';
import { footballIcon, redCardIcon, yellowCardIcon } from '../../../../assets/images';

const Stats = props => {
  let noStats = true;
  let statsEl = <p>No stats available.</p>;
  const stats = props.data;
  let statKeys = Object.keys(stats);

  statKeys.forEach(key => {
    if (stats[key].length) {
      noStats = false;

      return;
    }
  });

  if (!noStats) {
    statsEl = [];

    const goalsStat = {
      title: 'Goals',
      image: footballIcon,
      players: stats.goals
    };
    const yellowCardsStat = {
      title: 'Yellow Cards',
      image: yellowCardIcon,
      players: stats.yellowCards
    };
    const redCardsStat = {
      title: 'Red Cards',
      image: redCardIcon,
      players: stats.redCards
    };

    const goalsStatEl = <Stat key="stats-goals" stat={goalsStat} />;
    const yellowCardsStatEl = <Stat key="stats-yellows" stat={yellowCardsStat} />;
    const redCardsStatEl = <Stat key="stats-reds" stat={redCardsStat} />;

    statsEl.push(goalsStatEl);
    statsEl.push(yellowCardsStatEl);
    statsEl.push(redCardsStatEl);
  }

  return (
    <div className="container">
      <div className="stats-wrapper">{statsEl}</div>
    </div>
  );
};

Stats.propTypes = {
  data: PropTypes.object
};

export default Stats;

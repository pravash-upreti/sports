import React from 'react';

import Time from '../time';
import Player from '../player';

const FixtureCard = (props) => {
  return(
    <div className="fixture-container">
      <Player />
      <Time />
      <span className="player-mirror"><Player /></span>
    </div>
  );
};

export default FixtureCard;

import React from 'react';

import Player from '../player';
import Time from '../time';

const Fixture = (props) => {
  return(
    <div className="fixture-container">
      <Player/>
      <Time/>
      <span className="player-mirror"><Player/></span>
    </div>
  );
};
export default Fixture;

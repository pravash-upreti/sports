import React, { Fragment } from 'react';

import Photo from './Photo';

const Player = (props) => {
  return (
    <div className="player">
      <div className="player-name">{props.name}</div>
      <Photo img={props.img} />
    </div>
  );
}

export default Player;

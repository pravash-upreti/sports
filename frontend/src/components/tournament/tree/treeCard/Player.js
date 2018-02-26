import React from "react";

import PlayerPhoto from "./PlayerPhoto";

const Player = props => {
  const { name, img } = props;

  return (
    <div className="player">
      <div className="player-name">{name}</div>
      <PlayerPhoto img={img} size="small" />
    </div>
  );
};

export default Player;

import React from "react";

import Player from "./Player";
import MatchTime from "./MatchTime";

const Card = (props) => {
  const { matchTime, playerUp, playerDown } = props;

  return (
    <div className="card">
      <MatchTime {...matchTime} />
      <Player {...playerUp} />
      <Player {...playerDown} />
    </div>
  );
};

export default Card;

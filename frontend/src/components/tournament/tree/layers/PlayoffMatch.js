import React from 'react';

import Photo from '../cardv2/Photo';

const PlayoffMatch = (props) => {
  return (
    <div className="playoff-pair">
      <Photo img={props.playerUp.img} size={"medium"} />
      <Photo img={props.playerDown.img} size={"medium"} />
    </div>
  );
};

export default PlayoffMatch;

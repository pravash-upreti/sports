import React from 'react';

import PlayerPhoto from '../cardv2/PlayerPhoto';

const Winner = (props) => {
  const { img, name, title } = props;
    
  return (
    <div className="winner-container">
      <PlayerPhoto img={img} size={"large"} />
      <h3 className="winner-name">{name}</h3>
      <p className="winner-title">{title}</p>
    </div>
  );
};

export default Winner;

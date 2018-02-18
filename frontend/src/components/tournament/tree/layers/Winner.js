import React from 'react';

import Photo from '../cardv2/Photo';

const Winner = (props) => {
  return (
    <div className="winner-container">
      <Photo img={props.img} size={"large"} />
      <h3 className="winner-name">{props.name}</h3>
      <p className="winner-title">{props.title}</p>
    </div>
  );
};

export default Winner;

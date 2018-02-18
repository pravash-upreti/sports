import React from 'react';

import Card from '../cardv2/index';

const RoundFixtures = (props) => {
  return (
    <div className="card-container">
      {
        props.fixtures.map((fixture, index) => {
          return <Card  key={String(index)} {...fixture} />
        })
      }
    </div>
  );
};

export default RoundFixtures;

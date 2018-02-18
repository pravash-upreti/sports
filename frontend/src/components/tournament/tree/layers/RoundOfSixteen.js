import React from 'react';

import LayerHeader from './LayerHeader';
import RoundFixtures from './RoundFixtures';

const RoundOfSixteen = (props) => {
  const HALF_NUM_FIXTURES = props.fixtures.length / 2;
  return (
    <div className="round-of-sixteen-container">
      <LayerHeader title={props.layerTitle} />
      <RoundFixtures numCards={props.numCards} fixtures={props.fixtures.slice(0, HALF_NUM_FIXTURES)} />
      <RoundFixtures numCards={props.numCards} fixtures={props.fixtures.slice(HALF_NUM_FIXTURES)} />
    </div>
  );
};

export default RoundOfSixteen;

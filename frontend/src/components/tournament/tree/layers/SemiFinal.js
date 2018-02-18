import React from 'react';

import LayerHeader from './LayerHeader';
import RoundFixtures from './RoundFixtures';

const SemiFinal = (props) => {
  return (
    <div className="semi-final-container">
      <LayerHeader title={props.layerTitle} />
      <RoundFixtures numCards={props.numCards} fixtures={props.fixtures} />
    </div>
  );
};

export default SemiFinal;

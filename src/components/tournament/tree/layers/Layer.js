import React from 'react';
import PropTypes from 'prop-types';

import LayerHeader from './LayerHeader';
import RoundFixtures from './RoundFixtures';

const Final = props => {
  const { fixtures, layerTitle, containerClass } = props;

  return (
    <div className={containerClass}>
      <LayerHeader title={layerTitle} />
      <RoundFixtures fixtures={fixtures} />
    </div>
  );
};

Final.propTypes = {
  fixtures: PropTypes.array.isRequired,
  layerTitle: PropTypes.string.isRequired,
  containerClass: PropTypes.string.isRequired
};

export default Final;

import React from 'react';
import PropTypes from 'prop-types';

import Card from '../treeCard';

const FixtureRow = props => {
  const { fixtures } = props;

  return (
    <div className="card-container">
      {fixtures &&
        fixtures.map((fixture, index) => (
          <Card key={String(index)} {...fixture} />
        ))}
    </div>
  );
};

FixtureRow.propTypes = {
  fixtures: PropTypes.array.isRequired
};

export default FixtureRow;

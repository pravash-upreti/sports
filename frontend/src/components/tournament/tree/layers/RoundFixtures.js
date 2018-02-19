import React, { Fragment } from 'react';

import FixtureRow from './FixtureRow';

import { MAX_CARDS_PER_ROW } from '../../../../constants/tree';

const RoundFixtures = (props) => {
  const { fixtures } = props;

  return (
    (fixtures.length > MAX_CARDS_PER_ROW) ? (
      <Fragment>
        <RoundFixtures fixtures={fixtures.slice(0, MAX_CARDS_PER_ROW)} />
        <RoundFixtures fixtures={fixtures.slice(MAX_CARDS_PER_ROW)} />
      </Fragment>
     ) : (
      <FixtureRow fixtures={fixtures} />
     )
  );
};

export default RoundFixtures;

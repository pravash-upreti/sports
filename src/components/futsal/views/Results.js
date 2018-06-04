import React, {Fragment} from 'react';

import TournamentContentGroup from './TournamentContentGroup';

const Results = () => (
  <Fragment>
    <h3 className="tournament-content__heading">Results</h3>
    {
      <TournamentContentGroup />
    }
  </Fragment>
);

export default Results;

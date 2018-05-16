import React, { Fragment } from 'react';

import { getPointsData } from '../../../../services/FutsalService';

import PointsDataTable from './PointsDataTable';

const Points = () => {
  // TODO: Fetch data from HOC
  const pointsData = getPointsData();

  return (
    <Fragment>
      <h1>Points</h1>
      <table className="table">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Team</th>
            <th>MP</th>
            <th className="hide-on-small-screen">W</th>
            <th className="hide-on-small-screen">D</th>
            <th className="hide-on-small-screen">L</th>
            <th>GF</th>
            <th>GA</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <PointsDataTable pointsData={pointsData} />
        </tbody>
      </table>
    </Fragment>
  );
};

export default Points;

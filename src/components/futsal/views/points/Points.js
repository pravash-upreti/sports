import React from 'react';
import PropTypes from 'prop-types';

import PointsDataTable from './PointsDataTable';

const Points = props => (
  <div className="container">
    <table className="table table-striped points-table">
      <thead>
        <tr>
          <th className="point-rank">#</th>
          <th>Team</th>
          <th className="point-stat">P</th>
          <th className="point-stat">W</th>
          <th className="point-stat">D</th>
          <th className="point-stat">L</th>
          <th className="point-stat hide-on-small-screen">GF</th>
          <th className="point-stat hide-on-small-screen">GA</th>
          <th className="point-stat">GD</th>
          <th className="point-stat">Pts</th>
        </tr>
      </thead>
      <tbody>
        <PointsDataTable pointsData={props.data} />
      </tbody>
    </table>
  </div>
);

Points.propTypes = {
  data: PropTypes.array
};

export default Points;

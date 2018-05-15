import React, { Fragment } from 'react';

import { getPointsData } from '../../../services/FutsalService';

const Points = () => {
  const pointsData = getPointsData();

  const tableBodyEl = pointsData.map(points => (
    <tr key={`points-table-${points.id}`}>
      <td>{points.id}</td>
      <td>{points.name}</td>
      <td>{points.gamesPlayed}</td>
      <td className="hide-on-small-screen">{points.gamesWon}</td>
      <td className="hide-on-small-screen">{points.gamesDrawn}</td>
      <td className="hide-on-small-screen">{points.gamesLost}</td>
      <td>{points.goalsFor}</td>
      <td>{points.goalsAgainst}</td>
      <td>{points.points}</td>
    </tr>
  ));

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

        <tbody>{tableBodyEl}</tbody>
      </table>
    </Fragment>
  );
};

export default Points;

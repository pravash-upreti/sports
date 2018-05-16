import React from 'react';

const PointsDataTable = ({ pointsData }) =>
  pointsData.length &&
  pointsData.map(points => (
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

export default PointsDataTable;

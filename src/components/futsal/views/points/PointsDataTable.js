import React from 'react';

const PointsDataTable = ({ pointsData }) =>
  pointsData.length &&
  pointsData.map(points => (
    <tr key={`points-table-${points.id}`}>
      <td className="point-rank">{points.id}</td>
      <td>{points.team.name}</td>
      <td className="point-stat">{points.played}</td>
      <td className="point-stat">{points.won}</td>
      <td className="point-stat">{points.drawn}</td>
      <td className="point-stat">{points.lost}</td>
      <td className="point-stat hide-on-small-screen">{points.goalsFor}</td>
      <td className="point-stat hide-on-small-screen">{points.goalsAgainst}</td>
      <td className="point-stat">{points.goalDifference}</td>
      <td className="point-stat">{points.points}</td>
    </tr>
  ));

export default PointsDataTable;

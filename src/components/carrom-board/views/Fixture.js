import React from 'react';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';

import { getParticipantLogoElement } from '../../../utils/participantHelpers';

import ScoreModal from '../../common/contents/scoreModal';

const Fixture = ({ fixtures, routeProps }) => {
  const fixture =
    routeProps.location && routeProps.location.state
      ? routeProps.location.state.data
      : fixtures.find(fixture => fixture.id === parseInt(routeProps.match.params.fixtureId, 10));
  const isFixturePlayed = fixture.status.toLowerCase() === 'played';
  const fixtureDate = dateFns.format(new Date(fixture.date), 'dddd MMM D, YYYY, hh:mm A');

  const getScoreElement = actitivities => {
    let counter = 1;
    const homeScoreEl = [],
      awayScoreEl = [],
      colTitleEl = [];

    actitivities.forEach(activity => {
      const homeTeamActivityScore = !(activity.team === fixture.homeTeam.name) ? ' - ' : activity.points;
      const awayTeamActivityScore = !(activity.team === fixture.awayTeam.name) ? ' - ' : activity.points;

      colTitleEl.push(
        <th key={`activity-points-title-${activity.id}`} className="activity-points">
          R{counter}
        </th>
      );
      homeScoreEl.push(
        <td key={`activity-points-home-${activity.id}`} className="activity-points">
          {homeTeamActivityScore}
        </td>
      );
      awayScoreEl.push(
        <td key={`activity-points-away-${activity.id}`} className="activity-points">
          {awayTeamActivityScore}
        </td>
      );

      counter++;
    });

    return (
      <table>
        <tbody>
          <tr>
            <th>Team</th>
            {colTitleEl}
            <th className="activity-points">Total</th>
          </tr>
          <tr>
            <td>{fixture.homeTeam.name}</td>
            {homeScoreEl}
            <td className="activity-points">
              <strong>{fixture.homeTeamScore}</strong>
            </td>
          </tr>
          <tr>
            <td>{fixture.awayTeam.name}</td>
            {awayScoreEl}
            <td className="activity-points">
              <strong>{fixture.awayTeamScore}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  const resultScore = isFixturePlayed ? `${fixture.homeTeamScore} - ${fixture.awayTeamScore}` : `vs`;
  const titleEl = (
    <div>
      <div className="modal-row">
        <div className="col-2">
          <div className="modal-team-name">
            {fixture.homeTeam.players[0].name}
            {getParticipantLogoElement(fixture.homeTeam.players[0])}
          </div>
          <div className="modal-team-name">
            {fixture.homeTeam.players[1].name}
            {getParticipantLogoElement(fixture.homeTeam.players[1])}
          </div>
        </div>
        <div className="col-3">{resultScore}</div>
        <div className="col-4">
          <div className="modal-team-name">
            {getParticipantLogoElement(fixture.awayTeam.players[0])}
            {fixture.awayTeam.players[0].name}
          </div>
          <div className="modal-team-name">
            {getParticipantLogoElement(fixture.awayTeam.players[1])}
            {fixture.awayTeam.players[1].name}
          </div>
        </div>
      </div>
      <div className="modal-row modal-fixture-date">{`${fixture.round}, ${fixtureDate}`}</div>
    </div>
  );
  const scoreEl = !isFixturePlayed ? (
    <div>This fixture is yet to be played.</div>
  ) : !fixture.activities.length ? (
    <div>No info available.</div>
  ) : (
    getScoreElement(fixture.activities)
  );
  const bodyEl = <div>{scoreEl}</div>;

  return (
    <div>
      <ScoreModal titleEl={titleEl} bodyEl={bodyEl} routeProps={routeProps} />
    </div>
  );
};

Fixture.propTypes = {
  fixtures: PropTypes.array,
  routeProps: PropTypes.object
};

export default Fixture;

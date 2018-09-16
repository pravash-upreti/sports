import React from 'react';
import PropTypes from 'prop-types';

import { winnerTrophy, runnerUpTrophy } from '../../../assets/images';

import ScoreCard from '../../common/scoreCard';

const Recent = props => {
  const recents = props.data;

  if (recents.showChampions) {
    return (
      <div>
        <div>
          <h2 className="fixture-title">WINNERS</h2>
          <h1 className="winners">
            <img src={winnerTrophy} alt="Trophy" className="winner-trophy" />
            {recents.winner}
            <img src={winnerTrophy} alt="Trophy" className="winner-trophy" />
          </h1>
        </div>
        <div>
          <h2 className="fixture-title">RUNNER-UP</h2>
          <h1 className="runner-up">
            <img src={runnerUpTrophy} alt="Trophy" className="runner-up-trophy" />
            {recents.runnerUp}
            <img src={runnerUpTrophy} alt="Trophy" className="runner-up-trophy" />
          </h1>
        </div>
      </div>
    );
  }

  let resultElements = recents.results.map(result => <ScoreCard key={`score-card-${result.id}`} fixture={result} />);

  let fixtureElements = recents.fixtures.map(fixture => (
    <ScoreCard key={`score-card-${fixture.id}`} fixture={fixture} />
  ));

  let resultElWrapper = !resultElements.length ? (
    ''
  ) : (
    <div>
      <h2 className="fixture-title">RESULTS</h2>
      {resultElements}
    </div>
  );

  let fixtureElWrapper = !fixtureElements.length ? (
    ''
  ) : (
    <div>
      <h2 className="fixture-title">FIXTURES</h2>
      {fixtureElements}
    </div>
  );

  return (
    <div>
      {resultElWrapper}
      {fixtureElWrapper}
    </div>
  );
};

Recent.propTypes = {
  data: PropTypes.object
};

export default Recent;

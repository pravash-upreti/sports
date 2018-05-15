import React from 'react';

import Teams from './views/Teams';
import Stats from './views/Stats';
import Points from './views/Points';
import Results from './views/Results';
import Fixtures from './views/Fixtures';

const SubView = ({ match }) => {
  const el = getViewElement(match.params.viewName);

  return <div className="sub-view futsal">{el}</div>;
};

function getViewElement(viewName) {
  let viewElement = <Fixtures />;

  switch (viewName) {
    case 'points':
      viewElement = <Points />;
      break;

    case 'fixtures':
      viewElement = <Fixtures />;
      break;

    case 'teams':
      viewElement = <Teams />;
      break;

    case 'stats':
      viewElement = <Stats />;
      break;

    case 'results':
      viewElement = <Results />;
      break;

    default:
      viewElement = <Fixtures />;
      break;
  }

  return viewElement;
}

export default SubView;

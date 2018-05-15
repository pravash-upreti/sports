import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';

import SubView from './SubView';

const SubHeader = ({ match }) => (
  <Fragment>
    <div className="sub-header futsal">
      <nav className="container">
        <ul>
          <li>
            <Link to={`${match.url}/results`}>Results</Link>
          </li>
          <li>
            <Link to={`${match.url}/fixtures`}>Fixtures</Link>
          </li>
          <li>
            <Link to={`${match.url}/points`}>Points</Link>
          </li>
          <li>
            <Link to={`${match.url}/stats`}>Stats</Link>
          </li>
          <li>
            <Link to={`${match.url}/teams`}>Teams</Link>
          </li>
        </ul>
      </nav>
    </div>

    <Route path={`${match.url}/:viewName`} component={SubView} />
  </Fragment>
);

export default SubHeader;

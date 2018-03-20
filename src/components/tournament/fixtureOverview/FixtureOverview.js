import React from 'react';

import Dates from '../../commons/dates';
import Title from '../../commons/title';
import FixtureCard from './fixtureCard';
import Header from '../../commons/header';

const FixtureOverview = props => (
  <div className="user-outer-container">
    <Header />
    <div className="user-main-container">
      <div className="user-left-container">
        <div className="user-top-left-container">
          <Title />
          <FixtureCard />
          <FixtureCard />
          <FixtureCard />
        </div>
        <div className="user-bottom-left-container">
          <Title />
          <FixtureCard />
        </div>
      </div>
      <div className="user-right-container">
        <Title />
        <Dates />
        <FixtureCard />
        <FixtureCard />
        <FixtureCard />
        <FixtureCard />
      </div>
    </div>
  </div>
);

export default FixtureOverview;

import React from 'react';

import Fixture from '../fixture';
import Dates from '../commons/date';
import Title from '../commons/title';
import Header from '../commons/header';

const User = (props) => {
  return (
  <div className="user-outer-container">
    <Header/>
    <div className="user-main-container">
      <div className="user-left-container">
        <div className="user-top-left-container">
          <Title/>
          <Fixture/>
          <Fixture/>
          <Fixture/>
        </div>
        <div className="user-bottom-left-container">
          <Title/>
          <Fixture/>
        </div>
      </div>
      <div className="user-right-container">
        <Title/>
        <Dates/>
        <Fixture/>
        <Fixture/>
        <Fixture/>
        <Fixture/>
      </div>
    </div>
  </div>
  );
};

export default User;

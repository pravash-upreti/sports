import React from 'react';

import Header from '../commons/header';
import Fixture from '../fixture';

const User = (props) => {
  return (
  <div className="user-outer-container">
    <Header/>
    <div className="user-main-container">
      <div className="user-left-container">
        <div className="user-top-left-container">
          <div className="user-title-container">
            <span className="title">LATEST RESULTS</span>
          </div>
            <Fixture/>
            <Fixture/>
            <Fixture/>
        </div>
        <div className="user-bottom-left-container">
          <div className="user-title-container">
            <span className="title">NEXT MATCH</span>
          </div>
            <Fixture/>
        </div>
      </div>
      <div className="user-right-container">
          <div className="user-title-container">
            <span className="title">FIXTURES</span>
            <span className="date">MONDAY, FEB 18</span>
          </div>
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

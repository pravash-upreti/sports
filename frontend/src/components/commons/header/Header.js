import React from "react";

import logo from "../../../../public/assets/images/sports-logo.png";

const Header = props => (
  <div className="header-main-container">
    <div className="header-content-container">
      <div className="logo-container">
        <a href="#">
          <img src={logo} alt="Sports logo" />
        </a>
      </div>
      <div className="tournament-description-container">
        <span>Chess Tournament 2018</span>
      </div>
    </div>
  </div>
);

export default Header;

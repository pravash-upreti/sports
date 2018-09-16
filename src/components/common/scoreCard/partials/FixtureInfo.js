import React from 'react';
import PropTypes from 'prop-types';

const FixtureInfo = props => <div className="other-info fixture-info">{props.fixtureInfo}</div>;

FixtureInfo.propTypes = {
  fixtureInfo: PropTypes.string
};

export default FixtureInfo;

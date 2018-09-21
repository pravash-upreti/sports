import React from 'react';
import PropTypes from 'prop-types';

const FixtureInfo = props => {
  let els = props.fixtureInfo.map((info, index) => <p key={`info-${index}`}>{info}</p>);

  return <div className="other-info fixture-info">{els}</div>;
};

FixtureInfo.propTypes = {
  fixtureInfo: PropTypes.array
};

export default FixtureInfo;

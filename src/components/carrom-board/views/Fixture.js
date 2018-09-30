import React from 'react';
import PropTypes from 'prop-types';
import ScoreModal from '../../common/contents/scoreModal';

const Fixture = ({ routeProps }) => {
  // const fixture = routeProps.location.state.data;
  const titleEl = <div>Title Element</div>;
  const bodyEl = <div>Body element and other :D</div>;

  return (
    <div>
      <ScoreModal titleEl={titleEl} bodyEl={bodyEl} routeProps={routeProps} />
    </div>
  );
};

Fixture.propTypes = {
  routeProps: PropTypes.object
};

export default Fixture;

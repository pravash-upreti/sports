import React from 'react';
import PropTypes from 'prop-types';

const LayerHeader = props => {
  const { title } = props;

  return (
    <div className="layer-header-container">
      <div className="layer-header-upper" />
      <div className="layer-title">{title}</div>
    </div>
  );
};

LayerHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default LayerHeader;

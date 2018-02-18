import React from 'react';

const LayerHeader = (props) => {
  return (
    <div className="layer-header-container">
      <div className="layer-header-upper">
      </div>
      <div className="layer-title">
        {props.title}
      </div>
    </div>
  );
};

export default LayerHeader;

import React from "react";

const LayerHeader = (props) => {
  const { title } = props;

  return (
    <div className="layer-header-container">
      <div className="layer-header-upper" />
      <div className="layer-title">{title}</div>
    </div>
  );
};

export default LayerHeader;

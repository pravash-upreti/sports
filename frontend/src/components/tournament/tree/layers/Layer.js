import React from "react";

import LayerHeader from "./LayerHeader";
import RoundFixtures from "./RoundFixtures";

const Final = props => {
  const { layerTitle, fixtures, containerClass } = props;

  return (
    <div className={containerClass}>
      <LayerHeader title={layerTitle} />
      <RoundFixtures fixtures={fixtures} />
    </div>
  );
};

export default Final;

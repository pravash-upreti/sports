import React from "react";

import LayerHeader from "./LayerHeader";
import PlayerPhoto from "../treeCard/PlayerPhoto";

// Todo: Remove this function when data is dynamic
const getImagesFromFixtures = (fixtures) => {
  const imgArr = [];
  fixtures &&
    fixtures.map((fixture) => {
      imgArr.push(fixture.playerUp.img, fixture.playerDown.img);
    });

  return imgArr;
};

const Playoff = (props) => {
  const { fixtures, layerTitle } = props;
  const images = getImagesFromFixtures(fixtures);

  return (
    <div className="playoff-container">
      <LayerHeader title={layerTitle} />
      <div className="playoff-images-container">
        {images &&
          images.map((imgSource, index) => (
            <PlayerPhoto key={String(index)} size="medium" img={imgSource} />
          ))}
      </div>
    </div>
  );
};

export default Playoff;

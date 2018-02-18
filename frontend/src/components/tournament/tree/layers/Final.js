import React from 'react';

import Card from '../cardv2/index';
import LayerHeader from './LayerHeader';

const Final = (props) => {
  return (
    <div className="final-container">
      <LayerHeader title={props.layerTitle}/>
      <div className="card-container">
        <Card  {...props.players}/>
      </div>
    </div>
  );
};

export default Final;

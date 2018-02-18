import React from 'react';

import PlayoffMatch from './PlayoffMatch';

const PlayoffRow = (props) => {
  return (
    <div className="playoff-row">
      {
        props.matches.map((fixture, index) => {
          return <PlayoffMatch key={String(index)} {...fixture} />;
        })
      }
    </div>
  );
};

export default PlayoffRow;

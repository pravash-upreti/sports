import React from "react";

import Card from "../treeCard";

const FixtureRow = props => {
  const { fixtures } = props;

  return (
    <div className="card-container">
      {fixtures &&
        fixtures.map((fixture, index) => (
          <Card key={String(index)} {...fixture} />
        ))}
    </div>
  );
};

export default FixtureRow;

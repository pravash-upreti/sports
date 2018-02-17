import React, { Fragment } from 'react';

const Photo = (props) => {
  return (
    <div className="photo-container">
      <img src={props.img} alt="Player image" />
    </div>
  );
}

export default Photo;

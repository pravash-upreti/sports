import React, { Fragment } from 'react';

const Photo = (props) => {
  let photoClass = "photo-container-small";
  if (props.size === "medium") photoClass="photo-container-medium";
  if (props.size === "large") photoClass="photo-container-large";
  return (
    <div className={photoClass}>
      <img src={props.img} alt="Player image" />
    </div>
  );
}

export default Photo;

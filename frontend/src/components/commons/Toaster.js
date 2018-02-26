import React from 'react';

const Toaster = (props) => {
  return (
    <div className="Toaster">
      <p> {props.message} </p>
      <button onClick={props.hideToaster}>Hide Toaster</button>
    </div>
  );
};

export default Toaster;

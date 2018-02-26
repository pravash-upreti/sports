import React from 'react';

const Toaster = (props) => {
  const { message, hideToaster } = props;

  return (
    <div className="Toaster">
      <p> {message} </p>
      <button onClick={hideToaster}>Hide Toaster</button>
    </div>
  );
};

export default Toaster;

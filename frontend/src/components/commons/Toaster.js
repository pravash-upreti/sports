import React from 'react';

import { DEFAULT_TOASTER_MESSAGE } from '../../constants/errorMessages';

const Toaster = props => {
  const { message, closeToaster } = props;

  return (
    <div className="toaster">
      <p> {message} </p>
      <button onClick={closeToaster}>Hide Toaster</button>
    </div>
  );
};

export default Toaster;

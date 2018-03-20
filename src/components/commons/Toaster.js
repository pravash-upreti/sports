import React from 'react';
import PropTypes from 'prop-types';

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

Toaster.propTypes = {
  message: PropTypes.string,
  closeToaster: PropTypes.func.isRequired
};

Toaster.defaultProps = {
  message: DEFAULT_TOASTER_MESSAGE
};

export default Toaster;

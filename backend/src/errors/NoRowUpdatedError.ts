import * as HttpStatus from 'http-status-codes';

import Error from './Error';

/**
 * @class NoRowUpdatedError
 * @extends {Error}
 */
class NoRowUpdatedError extends Error {

  /**
   * Error message to be thrown.
   *
   * @type {string}
   * @memberof NoRowUpdatedError
   */
  message: string;

  /**
   * Creates an instance of NoRowUpdatedError.
   *
   * @param {string} message
   * @memberof NoRowUpdatedError
   */
  constructor(message: string) {
    super(message, HttpStatus.NOT_MODIFIED);

    this.message = message;
  }
}

export default NoRowUpdatedError;

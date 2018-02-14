import * as HttpStatus from 'http-status-codes';

import ChessError from './ChessError';

/**
 * @class NoRowUpdatedError
 * @extends {ChessError}
 */
class NoRowUpdatedError extends ChessError {
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

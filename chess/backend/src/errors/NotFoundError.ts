import * as HttpStatus from 'http-status-codes';

import ChessError from './ChessError';

/**
 * @class NotFoundError
 * @extends {ChessError}
 */
class NotFoundError extends ChessError {
  /**
   * Error message to be thrown.
   *
   * @type {string}
   * @memberof NotFoundError
   */
  message: string;

  /**
   * Creates an instance of NotFoundError.
   *
   * @param {string} message
   * @memberof NotFoundError
   */
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);

    this.message = message;
  }
}

export default NotFoundError;

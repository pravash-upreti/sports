import * as HttpStatus from 'http-status-codes';

import Error from './Error';

/**
 * @class UnAuthorizedError
 * @extends {Error}
 */
class UnAuthorizedError extends Error {

  /**
   * Error message to be thrown.
   *
   * @type {string}
   * @memberof UnAuthorizedError
   */
  message: string;

  /**
   * Creates an instance of UnAuthorizedError.
   *
   * @param {string} message
   * @memberof UnAuthorizedError
   */
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);

    this.message = message;
  }
}

export default UnAuthorizedError;

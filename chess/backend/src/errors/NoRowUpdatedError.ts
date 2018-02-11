import * as HttpStatus from 'http-status-codes';

import CustomError from './CustomError';

/**
 * @class NoRowUpdatedError
 * @extends {CustomError}
 */
class NoRowUpdatedError extends CustomError {
  message: string;

  constructor(message: string) {
    super(message, HttpStatus.NOT_MODIFIED);

    this.message = message;
  }
}

export default NoRowUpdatedError;

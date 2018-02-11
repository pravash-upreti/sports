import * as HttpStatus from 'http-status-codes';

import CustomError from './CustomError';

/**
 * @class NotFoundError
 * @extends {CustomError}
 */
class NotFoundError extends CustomError {
  message: string;

  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);

    this.message = message;
  }
}

export default NotFoundError;

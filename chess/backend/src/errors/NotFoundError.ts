import * as HttpStatus from 'http-status-codes';

import ChessError from './ChessError';

/**
 * @class NotFoundError
 * @extends {ChessError}
 */
class NotFoundError extends ChessError {
  message: string;

  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);

    this.message = message;
  }
}

export default NotFoundError;

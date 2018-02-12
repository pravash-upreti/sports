import * as HttpStatus from 'http-status-codes';

import ChessError from './ChessError';

/**
 * @class NoRowUpdatedError
 * @extends {ChessError}
 */
class NoRowUpdatedError extends ChessError {
  message: string;

  constructor(message: string) {
    super(message, HttpStatus.NOT_MODIFIED);

    this.message = message;
  }
}

export default NoRowUpdatedError;

import Error from './Error';

/**
 * @class ChessError
 * @extends {Error}
 */
class ChessError extends Error {
  message: string;

  isCustom: boolean;

  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message, statusCode);

    this.isCustom = true;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default ChessError;

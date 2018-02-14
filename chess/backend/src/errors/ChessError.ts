import Error from './Error';

/**
 * @class ChessError
 * @extends {Error}
 */
class ChessError extends Error {
  /**
   * Error message to be thrown.
   *
   * @type {string}
   * @memberof ChessError
   */
  message: string;

  /**
   * The type of error message. Similar to isBoom, isJoi etc.
   *
   * @type {boolean}
   * @memberof ChessError
   */
  isCustom: boolean;

  /**
   * HTTP Status code to be sent as response status.
   *
   * @type {number}
   * @memberof ChessError
   */
  statusCode: number;

  /**
   * Creates an instance of ChessError.
   *
   * @param {string} message
   * @param {number} statusCode
   * @memberof ChessError
   */
  constructor(message: string, statusCode: number) {
    super(message, statusCode);

    this.isCustom = true;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default ChessError;

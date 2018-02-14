/**
 * @class Error
 */
class Error {
  /**
   * Error message to be thrown.
   *
   * @type {string}
   * @memberof Error
   */
  message: string;

  /**
   * HTTP Status code to be sent as response status.
   *
   * @type {number}
   * @memberof Error
   */
  statusCode: number;

  /**
   * Creates an instance of Error.
   *
   * @param {string} message
   * @param {number} statusCode
   * @memberof Error
   */
  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default Error;

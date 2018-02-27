import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as chessFixtureSchemas from '../schemas/chessFixtureSchema';

/**
 * Validate a chess fixture post/put object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validateChessFixtureSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, chessFixtureSchemas.chessFixtureSchema);

  if (result && result.error) {
    return res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

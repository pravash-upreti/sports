import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as playerSchemas from '../schemas/playerSchema';

/**
 * Validate player post/put object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validatePlayerSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, playerSchemas.playerSchema);

  if (result.error) {
    return res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

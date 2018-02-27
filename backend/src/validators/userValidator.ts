import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as userSchemas from '../schemas/userSchema';

/**
 * Validate user post object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validateUserSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, userSchemas.userSchema);

  if (result && result.error) {
    return res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import { userRoleSchema } from '../schemas/userRoleSchema';

/**
 * Validate userRole post object.
 *
 * @export
 * @param req
 * @param res
 * @param next
 */

export function validateUserRoleSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, userRoleSchema);

  if (result.error) {
    res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

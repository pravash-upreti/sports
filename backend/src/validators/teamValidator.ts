import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as teamSchemas from '../schemas/teamSchema';

/**
 * Validate player post/put object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validateTeamSchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, teamSchemas.teamSchema);

  if (result.error) {
    return res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as tournamentCategorySchemas from '../schemas/tournamentCategorySchema';

/**
 * Validate tournament category post object.
 *
 * @param req
 * @param res
 * @param next
 */
export function validateTournamentCategorySchema(req: Request, res: Response, next: NextFunction) {
  const result = validate(req.body, tournamentCategorySchemas.tournamentCategorySchema);

  if (result && result.error) {
    return res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
}

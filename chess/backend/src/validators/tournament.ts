import { validate } from 'joi';
import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import * as tournamentSchemas from '../filters/tournament';

/**
 * Validate tournament post object.
 *
 * @param req
 * @param res
 * @param next
 */
export let validateTournamentSchema = (req: Request, res: Response, next: NextFunction) => {
  const result = validate(req.body, tournamentSchemas.tournamentSchema);

  if (result.error) {
    res.status(HttpStatus.BAD_REQUEST).json(result.error);
  }

  next();
};

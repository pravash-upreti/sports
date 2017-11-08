import { Request, Response, NextFunction } from 'express';

import HTTP_STATUS_CONSTANTS from '../utils/http_status';

import validate from '../utils/validate';
import * as schemas from '../filters/tournament';

export let validateTournamentSchema = (req: Request, res: Response, next: NextFunction) => {
  const result = validate(req.body, schemas.tournamentSchema);

  if (result.isValid) {
    next();
  }

  res.status(HTTP_STATUS_CONSTANTS.BAD_REQUEST).json(result.value);
};

export let validateTournamentCategorySchema = (req: Request, res: Response, next: NextFunction) => {
  const result = validate(req.body, schemas.tournamentCategorySchema);

  if (result.isValid) {
    next();
  }

  res.status(HTTP_STATUS_CONSTANTS.BAD_REQUEST).json(result.value);
};

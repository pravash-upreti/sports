import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import  { paramsValidatorMessages } from '../constants/messages';

/**
 * Validate URL params of a route.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function validateURLParams(req: Request, res: Response, next: NextFunction) {
  const params = req.params;

  if (params && params.id && isNaN(params.id)) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      error: {
        code: HttpStatus.BAD_REQUEST,
        message: paramsValidatorMessages.invalidId
      }
    });
  }

  if (params && params.tournamentId && isNaN(params.tournamentId)) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      error: {
        code: HttpStatus.BAD_REQUEST,
        message: paramsValidatorMessages.invalidTournamentId
      }
    });
  }

  next();
}

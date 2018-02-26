import * as HttpStatus from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

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

  if (params.id && isNaN(params.id)) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      error: {
        code: HttpStatus.BAD_REQUEST,
        message: 'Id must be a number.'
      }
    });
  }

  if (params.tournamentId && isNaN(params.tournamentId)) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      error: {
        code: HttpStatus.BAD_REQUEST,
        message: 'Tournament ID must be a number.'
      }
    });
  }

  next();
}

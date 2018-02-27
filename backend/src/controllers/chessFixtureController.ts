import { Request, Response, NextFunction } from 'express';

import * as chessFixtureService from '../services/chessFixtureService';

/**
 * Create a new chess fixture.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await chessFixtureService.create(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

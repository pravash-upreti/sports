import { Request, Response, NextFunction } from 'express';

import * as tournamentCategoryServices from '../services/tournamentCategoryService';

/**
 * Create a new tournament category.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentCategoryServices.create(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from 'express';

import * as tournamentCategoryService from '../services/tournamentCategoryService';

/**
 * Create a new tournament category.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentCategoryService.create(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Update links of tournament and categories.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentCategoryService.update(req.params.id, req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Delete or remove link of a tournament and a category.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentCategoryService.remove(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Get categories by tournament id.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function getCategoriesByTournament(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentCategoryService.getCategoriesByTournament(req.params.tournamentId);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

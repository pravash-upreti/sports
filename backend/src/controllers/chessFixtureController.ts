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

/**
 * Fetch a chess fixture info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await chessFixtureService.get(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Update a chess fixture info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await chessFixtureService.update(req.params.id, req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Remove or delete a chess fixture.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await chessFixtureService.remove(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

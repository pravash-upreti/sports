import { Request, Response, NextFunction } from 'express';

import * as teamPlayerService from '../services/teamPlayerService';

/**
 * Create a new team-player.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamPlayerService.create(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch a team-player's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamPlayerService.get(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch all team-players' info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamPlayerService.getAll();

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Update a team-player's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamPlayerService.update(req.params.id, req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete or remove a team-player's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamPlayerService.remove(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction } from 'express';

import * as playerService from '../services/playerService';

/**
 * Create a new player.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await playerService.create(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch a player's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await playerService.get(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch all players' info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await playerService.getAll();

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Update a player's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await playerService.update(req.params.id, req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete or remove a player's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await playerService.remove(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

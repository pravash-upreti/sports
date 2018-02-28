import { Request, Response, NextFunction } from 'express';

import * as teamService from '../services/teamService';

/**
 * Create a new team.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamService.create(req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch a team's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamService.get(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Fetch all teams' info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamService.getAll();

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Update a team's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamService.update(req.params.id, req.body);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete or remove a team's info.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await teamService.remove(req.params.id);

    return res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
};

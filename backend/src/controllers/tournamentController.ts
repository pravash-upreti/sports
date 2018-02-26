import { Request, Response, NextFunction } from 'express';

import * as tournamentService from '../services/tournamentService';

/**
 * Get tournament by ID.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const tournamentId = req.params.id;
    const response = await tournamentService.get(tournamentId);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Get list of all tournaments.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentService.getAll();

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new tournament.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await tournamentService.create(req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Update a tournament information.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const tournamentId = req.params.id;
    const response = await tournamentService.update(tournamentId, req.body);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

/**
 * Delete or remove a new tournament.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const tournamentId = req.params.id;
    const response = await tournamentService.remove(tournamentId);

    res.status(response.code).json(response);
  } catch (error) {
    next(error);
  }
}

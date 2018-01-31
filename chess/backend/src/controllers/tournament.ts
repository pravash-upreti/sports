import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';

import * as TournamentService from '../services/tournament';

/**
 * Get tournament by ID
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function get(req: Request, res: Response) {
  const tournamentId = req.params.id;
  const tournament = await TournamentService.findById(tournamentId);

  res.status(HttpStatus.OK).json({
    data: tournament
  });
}

/**
 * Get list of all tournaments.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function getAll(req: Request, res: Response) {
  const tournaments = await TournamentService.getAll();

  res.status(HttpStatus.OK).json({
    data: tournaments
  });
}

/**
 * Create a new tournament.
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function create(req: Request, res: Response) {
  const tournament = await TournamentService.create(req.body);

  res.status(HttpStatus.OK).json({
    data: tournament
  });
}

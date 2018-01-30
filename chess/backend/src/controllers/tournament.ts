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
  const tournament = await TournamentService.fetchById(tournamentId);

  res.status(HttpStatus.OK).json({
    data: tournament
  });
}

/**
 * Get list of all tournaments.
 *
 * @param req
 * @param res
 */
export async function getAll(req: Request, res: Response) {
  const tournaments = await TournamentService.fetchAll();

  res.status(HttpStatus.OK).json({
    data: tournaments
  });
}

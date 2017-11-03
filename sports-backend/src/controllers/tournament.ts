import { Request, Response } from 'express';

import HTTP_STATUS_CONSTANTS from '../utils/http_status';

import * as TournamentService from '../services/tournament';

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let getTournaments = async (req: Request, res: Response) => {
  try {
    const tournaments = await TournamentService.getAllTournaments();

    res.json(tournaments);
  } catch (ex) {
    res.json(ex);
  }
};

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let addTournament = async (req: Request, res: Response) => {
  try {
    const tournament = await TournamentService.addTournament(req.body);

    res.json(tournament);
  } catch (ex) {
    res.status(HTTP_STATUS_CONSTANTS.BAD_REQUEST).json(ex);
  }
};

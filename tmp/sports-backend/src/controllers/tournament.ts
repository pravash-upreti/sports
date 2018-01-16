import { Request, Response } from 'express';

import HTTP_STATUS_CONSTANTS from '../utils/http_status';

import * as TournamentService from '../services/tournament';

export const getTournament = async (req: Request, res: Response) => {
  try {
    const tournament = await TournamentService.getTournament(req.params.id);

    res.json(tournament);
  } catch (ex) {
    res.status(HTTP_STATUS_CONSTANTS.NOT_FOUND).json(ex);
  }
};

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

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let getTournamentCategories = async (req: Request, res: Response) => {
  try {
    const tournamentCategories = await TournamentService.getTournamentCategories(req.params.id);

    res.json(tournamentCategories);
  } catch (ex) {
    res.status(HTTP_STATUS_CONSTANTS.BAD_REQUEST).json(ex);
  }
};

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let addTournamentCategory = async (req: Request, res: Response) => {
  try {
    const tournamentCategory = await TournamentService.addTournamentCategory(req.params.id, req.body);

    res.json(tournamentCategory);
  } catch (ex) {
    res.status(HTTP_STATUS_CONSTANTS.BAD_REQUEST).json(ex);
  }
};

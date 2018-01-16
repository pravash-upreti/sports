import { Request, Response } from 'express';

import * as SeasonService from '../services/season';

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let getSeasons = async (req: Request, res: Response) => {
  try {
    const seasons = await SeasonService.getAllSeasons();

    res.json(seasons);
  } catch (ex) {
    res.json(ex);
  }
};

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let addSeason = async (req: Request, res: Response) => {
  try {
    const season = await SeasonService.addSeason(req.body);

    res.json(season);
  } catch (ex) {
    res.json(ex);
  }
};

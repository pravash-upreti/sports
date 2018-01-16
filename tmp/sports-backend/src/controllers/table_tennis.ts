import { Request, Response } from 'express';

import * as TableTennisService from '../services/table_tennis';

/**
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<void>}
 */
export let getMatches = async (req: Request, res: Response) => {
  try {
    const matches = await TableTennisService.getMatches();

    res.json(matches);
  } catch (ex) {
    res.json(ex);
  }
};

/**
 * @param {e.Request} req
 * @param {e.Response} res
 * @returns {Promise<void>}
 */
export let addMatch = async (req: Request, res: Response) => {
  try {
    const match = await TableTennisService.addMatch(req.body);

    res.json(match);
  } catch (ex) {
    res.json(ex);
  }
};

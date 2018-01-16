import { Request, Response } from 'express';

import * as PlayerService from '../services/player';

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let getPlayers = async (req: Request, res: Response) => {
  try {
    const players = await PlayerService.getAllPlayers();

    res.json(players);
  } catch (ex) {
    res.json(ex);
  }
};

/**
 * @param  {Request} req
 * @param  {Response} res
 */
export let addPlayer = async (req: Request, res: Response) => {
  try {
    const player = await PlayerService.addPlayer(req.body);

    res.json(player);
  } catch (ex) {
    res.json(ex);
  }
};

import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { playerMessages } from './../constants/messages';

import Player from '../models/player';
import NotFoundError from '../errors/NotFoundError';
import PlayerInterface from '../domain/PlayerInterface';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';

/**
 * Create a new player.
 *
 * @export
 * @param {PlayerInterface} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function create(params: PlayerInterface) {
  try {
    const player: Player = await new Player(params).save();

    if (!player) {
      throw new NoRowUpdatedError(playerMessages.unableToCreate);
    }

    return {
      data: player,
      code: HttpStatus.CREATED,
      message: playerMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Fetch a player's information.
 *
 * @export
 * @param {number} id
 * @returns
 * @throws {NotFoundError|error}
 */
export async function get(id: number) {
  try {
    const player: Player = await findById(id);

    return {
      data: player,
      code: HttpStatus.OK,
      message: playerMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Fetch all players' information.
 *
 * @export
 * @returns
 * @throws {error}
 */
export async function getAll() {
  try {
    const players: Collection<Player> = await new Player().fetchAll();

    return {
      data: players,
      code: HttpStatus.OK,
      message: playerMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Update a player's information.
 *
 * @export
 * @param {number} id
 * @param {PlayerInterface} params
 * @returns
 * @throws {NoRowUpdatedError|error}
 */
export async function update(id: number, params: PlayerInterface) {
  try {
    const player: Player = await findById(id);

    const updatedPlayer: Player = await player.save(params, { patch: true });

    if (!updatedPlayer) {
      throw new NoRowUpdatedError(playerMessages.unableToUpdate);
    }

    return {
      data: updatedPlayer,
      code: HttpStatus.OK,
      message: playerMessages.updated,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Remove or delete a player's information.
 *
 * @export
 * @param {number} id
 * @returns
 * @throws {NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const player: Player = await findById(id);

    const removedPlayer: Player = await player.destroy();

    if (!removedPlayer) {
      throw new NoRowUpdatedError(playerMessages.unableToRemove);
    }

    return {
      data: removedPlayer,
      code: HttpStatus.OK,
      message: playerMessages.removed,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Find player by ID.
 *
 * @param {number} id
 * @returns {Player}
 * @throws {NotFoundError|error}
 */
async function findById(id: number) {
  try {
    const player: Player = await new Player({ id }).fetch();

    if (!player) {
      throw new NotFoundError(playerMessages.notFound);
    }

    return player;
  } catch (error) {
    throw error;
  }
}

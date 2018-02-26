import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { teamMessages } from './../constants/messages';

import Team from '../models/team';
import TeamInterface from '../domain/TeamInterface';
import NotFoundError from '../errors/NotFoundError';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';

/**
 * Create a new team.
 *
 * @export
 * @param {TeamInterface} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function create(params: TeamInterface) {
  try {
    const team: Team = await new Team(params).save();

    if (!team) {
      throw new NoRowUpdatedError(teamMessages.unableToCreate);
    }

    return {
      data: team,
      code: HttpStatus.CREATED,
      message: teamMessages.created,
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
 * @returns {object}
 * @throws {NotFoundError|error}
 */
export async function get(id: number) {
  try {
    const team: Team = await findById(id);

    return {
      data: team,
      code: HttpStatus.OK,
      message: teamMessages.fetched,
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
 * @returns {object}
 * @throws {error}
 */
export async function getAll() {
  try {
    const teams: Collection<Team> = await new Team().fetchAll();

    return {
      data: teams,
      code: HttpStatus.OK,
      message: teamMessages.fetched,
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
 * @param {TeamInterface} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function update(id: number, params: TeamInterface) {
  try {
    const team: Team = await findById(id);

    const updatedTeam: Team = await team.save(params, { patch: true });

    if (!updatedTeam) {
      throw new NoRowUpdatedError(teamMessages.unableToUpdate);
    }

    return {
      data: updatedTeam,
      code: HttpStatus.OK,
      message: teamMessages.updated,
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
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const team: Team = await findById(id);

    const removedTeam: Team = await team.destroy();

    if (!removedTeam) {
      throw new NoRowUpdatedError(teamMessages.unableToRemove);
    }

    return {
      data: {
        id
      },
      code: HttpStatus.OK,
      message: teamMessages.removed,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Find team by ID.
 *
 * @param {number} id
 * @returns {Team}
 * @throws {NotFoundError|error}
 */
async function findById(id: number) {
  try {
    const team: Team = await new Team({ id }).fetch();

    if (!team) {
      throw new NotFoundError(teamMessages.notFound);
    }

    return team;
  } catch (error) {
    throw error;
  }
}

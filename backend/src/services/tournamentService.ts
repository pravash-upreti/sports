import { Collection } from 'bookshelf';

import Tournament from '../models/tournament';
import NotFoundError from '../errors/NotFoundError';
import NoRowUpdatedError from '../errors/NotFoundError';

/**
 * Find tournament by ID.
 *
 * @export
 * @param {number} id
 * @returns {Tournament}
 * @throws {NotFoundError|error}
 */
export async function findById(id: number) {
  try {
    const tournament: Tournament = await new Tournament({ id }).fetch();

    if (!tournament) {
      throw new NotFoundError('Tournament not found.');
    }

    return tournament;
  } catch (error) {
    throw error;
  }
}

/**
 * Fetch list of all tournaments.
 *
 * @export
 * @returns {Collection<Tournament>}
 * @throws {error}
 */
export async function getAll() {
  try {
    const tournamentsList: Collection<Tournament> = await new Tournament().fetchAll();

    return tournamentsList;
  } catch (error) {
    throw error;
  }
}

/**
 * Create a new tournament.
 *
 * @export
 * @param {object} params
 * @returns {Tournanent}
 * @throws {NoRowUpdatedError|error}
 */
export async function create(params: object) {
  try {
    const tournament: Tournament = await new Tournament(params).save();

    if (!tournament) {
      throw new NoRowUpdatedError('Unable to create a new tournament.');
    }

    return tournament;
  } catch (error) {
    throw error;
  }
}

/**
 * Update a tournament information.
 *
 * @export
 * @param {number} id
 * @param {object} params
 * @returns {object}
 * @throws {NotFoundError|NoRowUpdatedError|error}
 */
export async function update(id: number, params: object) {
  try {
    const tournament: Tournament = await findById(id);

    if (!tournament) {
      throw new NotFoundError('Tournament not found.');
    }

    const updatedTournament = await tournament.save(params, { patch: true });

    if (!updatedTournament) {
      throw new NoRowUpdatedError('Unable to update the tournament info.');
    }

    return {
      'message': 'Tournament updated successfully.'
    };
  } catch (error) {
    throw error;
  }
}

/**
 * Delete or remove a tournament.
 *
 * @export
 * @param {number} id
 * @returns {Tournament}
 * @throws {NotFoundError|NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const tournament: Tournament = await findById(id);

    if (!tournament) {
      throw new NotFoundError('Tournament not found.');
    }

    const deletedTournament = await tournament.destroy();

    if (!deletedTournament) {
      throw new NoRowUpdatedError('Unable to create a new tournament.');
    }

    return deletedTournament;
  } catch (error) {
    throw error;
  }
}

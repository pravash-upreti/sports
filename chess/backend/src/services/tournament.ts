import { Collection } from 'bookshelf';

import Tournament from '../models/tournament';

/**
 * Find tournament by ID.
 *
 * @export
 * @param {number} id
 * @returns {Tournament}
 * @throws {Tournament.NotFoundError|error}
 */
export async function findById(id: number) {
  try {
    const tournament: Tournament = await new Tournament({ id }).fetch();

    if (!tournament) {
      throw Tournament.NotFoundError;
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
 * @throws {Tournament.NotFoundError|error}
 */
export async function create(params: object) {
  try {
    const tournament: Tournament = await new Tournament(params).save();

    if (!tournament) {
      throw Tournament.NoRowsUpdatedError;
    }

    return tournament;
  } catch (error) {
    throw error;
  }
}

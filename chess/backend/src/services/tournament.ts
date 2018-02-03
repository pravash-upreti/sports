import { Collection } from 'bookshelf';

import Tournament from '../models/tournament';

/**
 * Find tournament by ID.
 *
 * @export
 * @param {number} id
 * @returns {Tournament|null}
 */
export async function findById(id: number) {
  try {
    const tournament: Tournament = await new Tournament({ id }).fetch();

    return tournament;
  } catch (error) {
    return null;
  }
}

/**
 * Fetch list of all tournaments.
 *
 * @export
 * @returns
 */
export async function getAll() {
  try {
    const tournamentsList: Collection<Tournament> = await new Tournament().fetchAll();

    return tournamentsList;
  } catch (error) {
    return null;
  }
}

/**
 * Create a new tournament.
 *
 * @export
 * @param {object} params
 * @returns
 */
export async function create(params: object) {
  try {
    const tournament: Tournament = await new Tournament(params).save();

    return tournament;
  } catch (error) {
    return null;
  }
}

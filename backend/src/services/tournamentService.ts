import { Collection } from 'bookshelf';

import { tournamentMessages } from '../constants/messages';

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
async function findById(id: number) {
  try {
    const tournament: Tournament = await new Tournament({ id }).fetch();

    if (!tournament) {
      throw new NotFoundError(tournamentMessages.notFound);
    }

    return tournament;
  } catch (error) {
    throw error;
  }
}

/** Fetch a tournament information.
 *
 * @export
 * @param {number} id
 * @returns {Tournament}
 * @throws {NotFoundError|error}
 */
export async function get(id: number) {
  try {
    const tournament: Tournament = await new Tournament({ id }).fetch();

    if (!tournament) {
      throw new NotFoundError(tournamentMessages.notFound);
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
      throw new NoRowUpdatedError(tournamentMessages.unableToCreate);
    }

    return {
      message: tournamentMessages.created
    };
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
      throw new NotFoundError(tournamentMessages.notFound);
    }

    const updatedTournament = await tournament.save(params, { patch: true });

    if (!updatedTournament) {
      throw new NoRowUpdatedError(tournamentMessages.unableToUpdate);
    }

    return {
      message: tournamentMessages.updated
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
 * @returns {object}
 * @throws {NotFoundError|NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const tournament: Tournament = await findById(id);

    if (!tournament) {
      throw new NotFoundError(tournamentMessages.notFound);
    }

    const deletedTournament = await tournament.destroy();

    if (!deletedTournament) {
      throw new NoRowUpdatedError(tournamentMessages.unableToRemove);
    }

    return {
      message: tournamentMessages.removed
    };
  } catch (error) {
    throw error;
  }
}

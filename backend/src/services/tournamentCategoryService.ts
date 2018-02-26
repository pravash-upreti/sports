import * as HttpStatus from 'http-status-codes';

import {
  categoryMessages,
  tournamentMessages,
  tournamentCategoryMessages
} from '../constants/messages';


import Category from '../models/category';
import Tournament from '../models/tournament';
import NotFoundError from '../errors/NotFoundError';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';
import TournamentCategory from '../models/tournamentCategory';
import TournamentCategoryInterface from '../domain/TournamentCategoryInterface';

/**
 * Create a new tournament category.
 *
 * @export
 * @param {object} params
 * @returns {object}
 */
export async function create(params: TournamentCategoryInterface) {
  try {
    // Check if the tournament exists
    const tournament = await new Tournament({ id: params.tournament_id }).fetch();

    if (!tournament) {
      throw new NotFoundError(tournamentMessages.notFound);
    }

    // Check if the category exists
    const category = await new Category({ id: params.category_id }).fetch();

    if (!category) {
      throw new NotFoundError(categoryMessages.notFound);
    }

    const tournamentCategory = await new TournamentCategory(params).save();

    if (!tournamentCategory) {
      throw new NoRowUpdatedError(tournamentCategoryMessages.unableToCreate);
    }

    return {
      data: tournamentCategory,
      code: HttpStatus.CREATED,
      message: tournamentCategoryMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };
  } catch (error) {
    throw error;
  }
};

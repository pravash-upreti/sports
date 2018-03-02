import * as HttpStatus from 'http-status-codes';

import {
  roundMessages,
  playerMessages,
  fixtureMessages,
  fixtureStatusMessages,
  tournamentCategoryMessages
} from './../constants/messages';

import Round from '../models/round';
import Player from '../models/player';
import ChessFixture from '../models/chessFixture';
import NotFoundError from '../errors/NotFoundError';
import FixtureStatus from '../models/fixtureStatus';
import BadRequestError from '../errors/BadRequestError';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';
import TournamentCategory from '../models/tournamentCategory';
import AlreadyExistsError from '../errors/AlreadyExistsError';
import ChessFixtureInterface from '../domain/ChessFixtureInterface';

/**
 * Create a new chess fixture/match.
 *
 * @export
 * @param {ChessFixtureInterface} params
 * @returns {object}
 * @throws {NotFoundError|BadRequestError|NoRowUpdatedError|AlreadyExistsError|error}
 */
export async function create(params: ChessFixtureInterface) {
  try {
    // Check whether both the opponents are same
    if (params.player_1_id === params.player_2_id) {
      throw new BadRequestError(fixtureMessages.sameTeams);
    }

    // Check whether the fixture already exists
    if (await checkIfFixtureExists(params)) {
      throw new AlreadyExistsError(fixtureMessages.alreadyExists);
    }

    // Check existence of the round
    const round: Round = await new Round({ id: params.round_id }).fetch();

    if (!round) {
      throw new NotFoundError(roundMessages.notFound);
    }

    // Check existence of the first player
    const player1: Player = await new Player({ id: params.player_1_id }).fetch();

    if (!player1) {
      throw new NotFoundError(playerMessages.notFound);
    }

    // Check existence of the second player
    const player2: Player = await new Player({ id: params.player_2_id }).fetch();

    if (!player2) {
      throw new NotFoundError(playerMessages.notFound);
    }

    // Check existence of fixture status
    const fixtureStatus: FixtureStatus = await new FixtureStatus({
      id: params.status_id
    }).fetch();

    if (!fixtureStatus) {
      throw new NotFoundError(fixtureStatusMessages.notFound);
    }

    // Check existence of tournament category
    const tournamentCategory: TournamentCategory = await new TournamentCategory({
      id: params.tournament_category_id
    }).fetch();

    if (!tournamentCategory) {
      throw new NotFoundError(tournamentCategoryMessages.notFound);
    }

    const chessFixture: ChessFixture = await new ChessFixture(params).save();

    if (!chessFixture) {
      throw new NoRowUpdatedError(fixtureMessages.unableToCreate);
    }

    return {
      data: chessFixture,
      code: HttpStatus.CREATED,
      message: fixtureMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Update an existing chess fixture/match.
 *
 * @export
 * @param {number} id
 * @param {ChessFixtureInterface} params
 * @returns
 * @throws {NotFoundError|BadRequestError|NoRowUpdatedError|AlreadyExistsError|error}
 */
export async function update(id: number, params: ChessFixtureInterface) {
  try {
    // Check whether both the opponents are same
    if (params.player_1_id === params.player_2_id) {
      throw new BadRequestError(fixtureMessages.sameTeams);
    }

    // Check whether the match already exists
    if (await checkIfFixtureExists(params, [ id ])) {
      throw new AlreadyExistsError(fixtureMessages.alreadyExists);
    }

    // Check existence of the round
    const round: Round = await new Round({ id: params.round_id }).fetch();

    if (!round) {
      throw new NotFoundError(roundMessages.notFound);
    }

    // Check existence of the first player
    const player1: Player = await new Player({ id: params.player_1_id }).fetch();

    if (!player1) {
      throw new NotFoundError(playerMessages.notFound);
    }

    // Check existence of the second player
    const player2: Player = await new Player({ id: params.player_2_id }).fetch();

    if (!player2) {
      throw new NotFoundError(playerMessages.notFound);
    }

    // Check existence of fixture status
    const fixtureStatus: FixtureStatus = await new FixtureStatus({
      id: params.status_id
    }).fetch();

    if (!fixtureStatus) {
      throw new NotFoundError(fixtureStatusMessages.notFound);
    }

    // Check existence of tournament category
    const tournamentCategory: TournamentCategory = await new TournamentCategory({
      id: params.tournament_category_id
    }).fetch();

    if (!tournamentCategory) {
      throw new NotFoundError(tournamentCategoryMessages.notFound);
    }

    const chessFixture: ChessFixture = await findById(id);
    const updatedChessFixture: ChessFixture = await chessFixture.save(params, { patch: true });

    if (!updatedChessFixture) {
      throw new NoRowUpdatedError(fixtureMessages.unableToUpdate);
    }

    return {
      code: HttpStatus.OK,
      data: updatedChessFixture,
      message: fixtureMessages.updated,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Remove or delete an existing chess fixture.
 *
 * @export
 * @param {number} id
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const chessFixture: ChessFixture = await findById(id);
    const removedChessFixture: ChessFixture = await chessFixture.destroy();

    if (!removedChessFixture) {
      throw new NoRowUpdatedError(fixtureMessages.unableToRemove);

    }

    return {
      data: {
        id
      },
      code: HttpStatus.OK,
      message: fixtureMessages.removed,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Fetch a chess fixture info.
 *
 * @export
 * @param {number} id
 * @returns {object}
 * @throws {error}
 */
export async function get(id: number) {
  try {
    const chessFixture: ChessFixture = await findById(id);

    return {
      data: chessFixture,
      code: HttpStatus.OK,
      message: fixtureMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
}

/**
 * Find a chess fixture by ID.
 *
 * @param {number} id
 * @returns {ChessFixture}
 * @throws {NotFoundError|;error}
 */
async function findById(id: number) {
  try {
    const chessFixture: ChessFixture = await new ChessFixture({ id })
      .fetch({
        withRelated: [
          'round',
          'status',
          'player1',
          'player2',
          'winnerPlayer',
          'winningMethod',
          'tournamentCategory'
        ]
      });

    if (!chessFixture) {
      throw new NotFoundError(fixtureMessages.notFound);
    }

    return chessFixture;
  } catch (error) {
    throw(error);
  }
};

/**
 * Check if a match or fixture exists.
 *
 * @param {ChessFixtureInterface} params
 * @param {number[]} ignoredIds
 * @returns {boolean}
 * @throws {error}
 */
async function checkIfFixtureExists(params: ChessFixtureInterface, ignoredIds: number[] = []) {
  try {
    const chessFixture: ChessFixture = await new ChessFixture()
      .query(qb => {
        qb.where(q => {
          q.orWhere({
            round_id: params.round_id,
            player_1_id: params.player_1_id,
            player_2_id: params.player_2_id,
            tournament_category_id: params.tournament_category_id
          }).orWhere({
            round_id: params.round_id,
            player_1_id: params.player_2_id,
            player_2_id: params.player_1_id,
            tournament_category_id: params.tournament_category_id
          });
        });

        if (ignoredIds.length) {
          qb.whereNotIn('id', ignoredIds);
        }
      }).fetch();

    return !!chessFixture;
  } catch (error) {
    throw(error);
  }
};

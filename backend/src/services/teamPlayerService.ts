import { Collection } from 'bookshelf';
import * as HttpStatus from 'http-status-codes';

import { teamMessages, playerMessages, teamPlayerMessages } from './../constants/messages';

import Team from '../models/team';
import Player from '../models/player';
import TeamPlayer from '../models/teamPlayer';
import NotFoundError from '../errors/NotFoundError';
import NoRowUpdatedError from '../errors/NoRowUpdatedError';
import TeamPlayerInterface from '../domain/TeamPlayerInterface';

/**
 * Create a new team player.
 *
 * @export
 * @param {TeamPlayerInterface} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function create(params: TeamPlayerInterface) {
  try {
    const team: Team = await new Team({ id: params.team_id }).fetch();

    if (!team) {
      throw new NotFoundError(teamMessages.notFound);
    }

    const player: Player = await new Player({ id: params.player_id }).fetch();

    if (!player) {
      throw new NotFoundError(playerMessages.notFound);
    }

    const teamPlayer: TeamPlayer = await new TeamPlayer(params).save();

    if (!teamPlayer) {
      throw new NoRowUpdatedError(teamPlayerMessages.unableToCreate);
    }

    return {
      data: teamPlayer,
      code: HttpStatus.CREATED,
      message: teamPlayerMessages.created,
      status: HttpStatus.getStatusText(HttpStatus.CREATED)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Fetch a team player.
 *
 * @export
 * @param {number} id
 * @returns {object}
 * @throws {NotFoundError|error}
 */
export async function get(id: number) {
  try {
    const teamPlayer: TeamPlayer = await findById(id);

    return {
      data: teamPlayer,
      code: HttpStatus.OK,
      message: teamPlayerMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Fetch all team players.
 *
 * @export
 * @returns {object}
 * @throws {error}
 */
export async function getAll() {
  try {
    const teamPlayers: Collection<TeamPlayer> = await new TeamPlayer().fetchAll({ withRelated: ['team', 'player'] });

    return {
      data: teamPlayers,
      code: HttpStatus.OK,
      message: teamPlayerMessages.fetched,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Update a team-player's information.
 *
 * @export
 * @param {number} id
 * @param {TeamPlayerInterface} params
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function update(id: number, params: TeamPlayerInterface) {
  try {
    const team: Team = await new Team({ id: params.team_id }).fetch();

    if (!team) {
      throw new NotFoundError(teamMessages.notFound);
    }

    const player: Player = await new Player({ id: params.player_id }).fetch();

    if (!player) {
      throw new NotFoundError(playerMessages.notFound);
    }

    const teamPlayer: TeamPlayer = await findById(id);
    const updatedTeamPlayer: TeamPlayer = await teamPlayer.save(params, { patch: true });

    if (!updatedTeamPlayer) {
      throw new NoRowUpdatedError(teamPlayerMessages.unableToUpdate);
    }

    return {
      code: HttpStatus.OK,
      data: updatedTeamPlayer,
      message: teamPlayerMessages.updated,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Remove or delete a team player's information.
 *
 * @export
 * @param {number} id
 * @returns {object}
 * @throws {NoRowUpdatedError|error}
 */
export async function remove(id: number) {
  try {
    const teamPlayer: TeamPlayer = await findById(id);
    const removedTeamPlayer: TeamPlayer = await teamPlayer.destroy();

    if (!removedTeamPlayer) {
      throw new NoRowUpdatedError(teamPlayerMessages.unableToRemove);
    }

    return {
      data: {
        id
      },
      code: HttpStatus.OK,
      message: teamPlayerMessages.removed,
      status: HttpStatus.getStatusText(HttpStatus.OK)
    };
  } catch (error) {
    throw(error);
  }
};

/**
 * Find team-player by ID.
 *
 * @param {number} id
 * @returns {TeamPlayer}
 * @throws {NotFoundError|error}
 */
async function findById(id: number) {
  try {
    const teamPlayer: TeamPlayer = await new TeamPlayer({ id }).fetch({ withRelated: ['team', 'player'] });

    if (!teamPlayer) {
      throw new NotFoundError(teamPlayerMessages.notFound);
    }

    return teamPlayer;
  } catch (error) {
    throw error;
  }
}

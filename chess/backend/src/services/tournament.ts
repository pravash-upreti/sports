import Tournament from '../models/tournament';

/**
 * Fetch tournament by ID.
 *
 * @export
 * @param {number} id
 * @returns {Tournament|null}
 */
export async function fetchById(id: number) {
  try {
    const tournament: Tournament = await new Tournament().where({ id: id }).fetch();

    return tournament;
  } catch (error) {
    return null;
  }
}

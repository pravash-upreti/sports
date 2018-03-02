import { TOURNAMENTS } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axiosInstance';

/**
 * Get all Tournaments
 *
 * @export
 * @returns {array}
 * @throws {error}
 */
export async function getTournaments() {
  try {
    const response = await axiosInstance.get(TOURNAMENTS);

    return (response && response.data && response.data.data) || [];
  } catch (error) {
    throw error;
  }
}

/**
 * Create a Tournament
 *
 * @export
 * @param {object} payload
 * @returns {array}
 * @throws {error}
 */
export async function createTournament(payload) {
  try {
    const response = await axiosInstance.post(TOURNAMENTS, payload);

    return (response && response.data && response.data.data) || [];
  } catch (error) {
    throw error;
  }
}

/**
 * Edit a Tournament
 *
 * @export
 * @param {object} payload
 * @param {number} id
 * @returns {array}
 * @throws {error}
 */
export async function editTournament(payload, id) {
  try {
    const response = await axiosInstance.put(TOURNAMENTS + '/' + id, payload);

    return (response && response.data && response.data.data) || [];
  } catch (error) {
    throw error;
  }
}

/**
 * Delete a Tournament
 *
 * @export
 * @param {number} id
 * @returns {array}
 * @throws {error}
 */
export async function deleteTournament(id) {
  try {
    const response = await axiosInstance.delete(TOURNAMENTS + '/' + id);

    return (response && response.data && response.data.data) || [];
  } catch (error) {
    throw error;
  }
}

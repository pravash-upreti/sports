import { TOURNAMENTS } from '../../constants/apiUrls';

import axiosInstance from '../../utils/axiosInstance';

export async function getTournaments() {
  try {
    const response = await axiosInstance.get(TOURNAMENTS);
    const fetchedUsers =
      (response && response.data && response.data.data) || [];

    return fetchedUsers;
  } catch (error) {
    throw error;
  }
}

export async function createTournament(payload) {
  try {
    const response = await axiosInstance.post(TOURNAMENTS, payload);
    const fetchedUsers =
      (response && response.data && response.data.data) || [];

    return fetchedUsers;
  } catch (error) {
    throw error;
  }
}

export async function editTournament(payload, id) {
  try {
    const response = await axiosInstance.put(TOURNAMENTS + '/' + id, payload);
    const fetchedUsers =
      (response && response.data && response.data.data) || [];

    return fetchedUsers;
  } catch (error) {
    throw error;
  }
}

export async function deleteTournament(id) {
  try {
    const response = await axiosInstance.delete(TOURNAMENTS + '/' + id);
    const fetchedUsers =
      (response && response.data && response.data.data) || [];

    return fetchedUsers;
  } catch (error) {
    throw error;
  }
}

import axios from 'axios';

import sports from '../constants/sports';

/**
 * Fetch sport data for sport type and season.
 *
 * @export
 * @param {string} sport
 * @param {(string|number)} season
 * @returns {Promise<any>}
 */
export async function fetchSportData(sport: string, season: string|number): Promise<any> {
  const apiUrl = getTournamentApiUrl(sport, season);
  const response = await axios.get(apiUrl);

  return response;
}

/**
 * Get API URL for tournament.
 *
 * @param {string} sport
 * @param {(string|number)} season
 * @returns {string}
 */
function getTournamentApiUrl(sport: string, season: string|number): string {
  if (!sport.length) {
    return '';
  }

  let apiUrl = `${process.env.VUE_APP_API_BASE_URL}?sport=`;

  switch (sport) {
    case sports.TABLE_TENNIS:
      apiUrl += sport;
      break;
  }

  return `${apiUrl}&year=${season}`;
}

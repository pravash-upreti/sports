import axios from 'axios';

/**
 * Fetch sport data for sport type and season.
 *
 * @export
 * @param {string} sport
 * @param {(string|number)} season
 * @returns {Promise<any>}
 */
export async function fetchSportData(sport: string, season: string | number): Promise<any> {
  try {
    const apiUrl = getTournamentApiUrl(sport, season);

    if (apiUrl) {
      return await axios.get(apiUrl);
    }
  } catch (e) {
    return null;
  }
}

/**
 * Get API URL for a specific tournament.
 *
 * @param {string} sport
 * @param {(string|number)} season
 * @returns {string | null}
 */
function getTournamentApiUrl(sport: string, season: string | number): string | null {
  if (!sport.length || !season.toString().length) {
    return null;
  }

  return `${process.env.VUE_APP_API_BASE_URL}/${sport}-${season}`;
}

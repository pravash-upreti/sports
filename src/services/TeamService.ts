import { checkIfPlayerIsInTeam } from './PlayerService';
import { TeamInterface } from './../interfaces/interfaces';

/**
 * Get search results from a list of team using keyword.
 *
 * @export
 * @param {TeamInterface[]} allTeams
 * @param {string} keyword
 * @returns {TeamInterface[]}
 */
export function searchTeamsByKeyword(allTeams: TeamInterface[], keyword: string): TeamInterface[] {
  let teams: TeamInterface[] = [];

  teams = allTeams.filter((team) => {
    return team.name.toLowerCase().indexOf(keyword.toLowerCase()) >= 0 || checkIfPlayerIsInTeam(team, keyword);
  });

  return teams;
}

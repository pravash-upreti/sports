import dateFns from 'date-fns';
import { isNull, sortBy, cloneDeep, isUndefined } from 'lodash';

import {
  TeamInterface,
  RoundInterface,
  FixtureInterface,
  RecentsInterface,
  CategoryInterface,
  TournamentDataInterface,
  TournamentDataResponseInterface,
} from '../interfaces/interfaces';
import { checkIfPlayerIsInTeam } from './PlayerService';

export function getFixtures(fixturesList: FixtureInterface[], limit: number = 0): FixtureInterface[] {
  let fixtures = fixturesList
    .filter((fixture) => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) < 0)
    .sort((a, b) => {
      return dateFns.compareAsc(a.date, b.date);
    });

  if (limit) {
    fixtures = fixtures.slice(0, limit);
  }

  return fixtures;
}

export function getResults(fixturesList: FixtureInterface[], limit: number = 0): FixtureInterface[] {
  let results = fixturesList
    .filter((fixture) => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) >= 0)
    .sort((a, b) => {
      return dateFns.compareDesc(a.date, b.date);
    });

  if (limit) {
    results = results.slice(0, limit);
  }

  return results;
}

export function getRecentFixtures(
  tournamentDetails: TournamentDataResponseInterface,
  limit: number = 2
): RecentsInterface {
  const today = new Date();
  const finishDate = new Date(tournamentDetails.details.finishDate);
  const recents: RecentsInterface = {
    results: [],
    fixtures: [],
    winners: [],
    showWinners: false
  };

  if (dateFns.isAfter(today, finishDate)) {
    recents.showWinners = true;
    recents.winners =
      tournamentDetails.details.winners && tournamentDetails.details.winners.length
        ? tournamentDetails.details.winners
        : [
            {
              category: '',
              winner: tournamentDetails.details.winner,
              runnerUp: tournamentDetails.details.runnerUp
            }
          ];
  } else {
    recents.results = getResults(tournamentDetails.fixtures, limit);
    recents.fixtures = getFixtures(tournamentDetails.fixtures, limit);
  }

  return recents;
}

export function getFixtureDate(fixture: FixtureInterface) {
  let fDate = 'TBD';
  let fTime = 'TBD';

  if (fixture.date) {
    fDate = dateFns.format(fixture.date, 'ddd, MMM D');
    fTime = dateFns.format(fixture.date, 'h:mm A');
  }

  return {
    date: fDate,
    time: fTime
  };
}

/**
 * Get search results from a list of fixtures using keyword.
 *
 * @export
 * @param {FixtureInterface[]} allFixtures
 * @param {string} keyword
 * @returns {FixtureInterface[]}
 */
export function searchFixturesByKeyword(allFixtures: FixtureInterface[], keyword: string): FixtureInterface[] {
  let searchResults: FixtureInterface[] = [];

  searchResults = allFixtures.filter((fixture) => {
    const homeTeamName =
      isUndefined(fixture.awayTeam.name) || isNull(fixture.awayTeam.name) ? '' : fixture.awayTeam.name;
    const awayTeamName =
      isUndefined(fixture.awayTeam.name) || isNull(fixture.awayTeam.name) ? '' : fixture.awayTeam.name;

    return (
      homeTeamName.toLowerCase().indexOf(keyword) >= 0 ||
      awayTeamName.toLowerCase().indexOf(keyword) >= 0 ||
      checkIfPlayerIsInTeam(fixture.homeTeam, keyword) ||
      checkIfPlayerIsInTeam(fixture.awayTeam, keyword)
    );
  });

  return searchResults;
}

/**
 * Fetch list of updated categories.
 *
 * @export
 * @param {CategoryInterface[]} [categories=[]]
 * @returns {CategoryInterface[]}
 */
export function getCategories(categories: CategoryInterface[] = []) {
  let categoriesList: CategoryInterface[] = categories;

  if (categories.length > 1) {
    const allCategory: CategoryInterface = { id: 0, description: 'All Categories' };

    categoriesList = [allCategory].concat(categories);
  }

  return categoriesList;
}

/**
 * Fetch list of updated rounds.
 *
 * @export
 * @param {RoundInterface[]} [rounds=[]]
 * @returns {RoundInterface[]}
 */
export function getRounds(rounds: RoundInterface[] = []) {
  let roundsList: RoundInterface[] = rounds;

  if (rounds.length > 1) {
    const allCategory: RoundInterface = {
      id: 0,
      description: 'All Rounds',
      sortOrder: 0,
      shortName: 'All'
    };

    roundsList = [allCategory].concat(rounds);
  }

  return roundsList;
}

/**
 * Get formatted tournament data.
 *
 * @export
 * @param {*} data
 * @param {number} [limit=0]
 * @returns {TournamentDataInterface}
 */
export function getSanitizedData(data: any, limit: number = 0): TournamentDataInterface {
  return {
    teams: data.teams,
    points: data.table || [],
    stats: data.stats || [],
    details: data.details,
    allFixtures: data.fixtures,
    statuses: data.statuses || [],
    results: getResults(data.fixtures),
    recents: getRecentFixtures(data, limit),
    fixtures: getFixtures(data.fixtures),
    rounds: getRounds(data.rounds) || [],
    categories: getCategories(data.categories) || []
  };
}

/**
 * Filter data by different params.
 *
 * @export
 * @param {*} data
 * @param {*} params
 * @returns {*}
 */
export function getFilteredData(data: any, params: any) {
  const filteredData = data;

  // Filter by category
  if (params.category && params.category.id >= 0) {
    filteredData.allFixtures = filterFixturesByCategory(filteredData.allFixtures, params.category);
    filteredData.fixtures = filterFixturesByCategory(filteredData.fixtures, params.category);
    filteredData.results = filterFixturesByCategory(filteredData.results, params.category);
    filteredData.teams = filterTeamsByCategory(filteredData.teams, params.category);
    filteredData.recents = filterRecentsByCategory(filteredData.recents, params.category);
  }

  return filteredData;
}

/**
 * Check if fixture is played.
 *
 * @export
 * @param {FixtureInterface} fixture
 * @returns {boolean}
 */
export function isFixturePlayed(fixture: FixtureInterface) {
  return fixture.status.toLowerCase() === 'played';
}

/**
 * Check if fixture is cancelled.
 *
 * @export
 * @param {FixtureInterface} fixture
 * @returns {boolean}
 */
export function isFixtureCancelled(fixture: FixtureInterface) {
  return fixture.status.toLowerCase() === 'cancelled';
}

/**
 * Filter fixtures by category.
 *
 * @export
 * @param {FixtureInterface[]} fixtures
 * @param {CategoryInterface} category
 * @returns {FixtureInterface[]}
 */
function filterFixturesByCategory(fixtures: FixtureInterface[], category: CategoryInterface) {
  if (category.id !== 0) {
    return fixtures.filter((fixture) => fixture.categoryType.toLowerCase() === category.description.toLowerCase());
  }

  return fixtures;
}

/**
 * Filter teams by category.
 *
 * @export
 * @param {TeamInterface[]} teams
 * @param {CategoryInterface} category
 * @returns {TeamInterface[]}
 */
function filterTeamsByCategory(teams: TeamInterface[], category: CategoryInterface) {
  let teamsList = cloneDeep(teams);

  if (category && category.id !== 0) {
    teamsList = teams.filter((team) => team.category.toLowerCase() === category.description.toLowerCase());
  }

  return sortBy(teamsList, ['category', 'name']);
}

/**
 * Fetch winners list by category.
 *
 * @param {any[]} winners
 * @param {CategoryInterface} category
 * @returns {*}
 */
function filterWinnersByCategory(winners: any[], category: CategoryInterface) {
  if (category && category.id !== 0) {
    return winners.filter((winner) => winner.category.toLowerCase() === category.description.toLowerCase());
  }

  return winners;
}

/**
 * Filter recents info by category.
 *
 * @param {RecentsInterface} recents
 * @param {CategoryInterface} category
 * @returns {RecentsInterface}
 */
function filterRecentsByCategory(recents: RecentsInterface, category: CategoryInterface) {
  const updatedRecents = cloneDeep(recents);

  if (category && category.id !== 0) {
    updatedRecents.winners = filterWinnersByCategory(recents.winners, category);
    updatedRecents.results = filterFixturesByCategory(recents.results, category);
    updatedRecents.fixtures = filterFixturesByCategory(recents.fixtures, category);
  }

  return updatedRecents;
}

/**
 * Sort fixtures by date.
 *
 * @exports
 * @param fixtures
 */
export function sortFixturesByDate(fixtures: FixtureInterface[], order: string = 'ASC') {
  const sortedFixtures = fixtures.sort((a, b) => {
    const dateA: any = new Date(a.date);
    const dateB: any = new Date(b.date);

    return dateA - dateB;
  });

  if (order.toLowerCase() === 'desc') {
    return sortedFixtures.reverse();
  }

  return sortedFixtures;
}

import dateFns from 'date-fns';
import { isNull, isUndefined } from 'lodash';

import { checkIfPlayerIsInTeam } from './PlayerService';
import { CategoryInterface, RoundInterface } from './../interfaces/interfaces';
import { FixtureInterface, RecentsInterface, TournamentDataResponseInterface } from '@/interfaces/interfaces';

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
    fDate = dateFns.format(fixture.date, 'MMM D');
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

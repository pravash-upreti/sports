import { CategoryInterface } from './../interfaces/interfaces';
import dateFns from 'date-fns';

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
    recents.winners = tournamentDetails.details.winners && tournamentDetails.details.winners.length ?
      tournamentDetails.details.winners : [
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
  return {
    date: dateFns.format(fixture.date, 'MMM D'),
    time: dateFns.format(fixture.date, 'h:mm A')
  };
}

/**
 * Fetch list of updated categories.
 *
 * @export
 * @param {CategoryInterface[]} [categories=[]]
 * @returns
 */
export function getCategories(categories: CategoryInterface[] = []) {
  let cats: CategoryInterface[] = categories;

  if (categories.length > 1) {
    const allCategory: CategoryInterface = { id: 0, description: 'All' };

    cats = [allCategory].concat(categories);
  }

  return cats;
}

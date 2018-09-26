import dateFns from 'date-fns';

const getFixtures = (fixturesList, limit) => {
  let fixtures = fixturesList
    .filter(fixture => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) < 0)
    .sort((a, b) => {
      return dateFns.compareAsc(a.date, b.date);
    });

  if (limit) {
    fixtures = fixtures.slice(0, limit);
  }

  return fixtures;
};

const getResults = (fixturesList, limit) => {
  let results = fixturesList
    .filter(fixture => ['played', 'forfeited'].indexOf(fixture.status.toLowerCase()) >= 0)
    .sort((a, b) => {
      return dateFns.compareDesc(a.date, b.date);
    });

  if (limit) {
    results = results.slice(0, limit);
  }

  return results;
};

const getRecentFixtures = (tournamentDetails, limit = 2) => {
  const today = new Date();
  const finishDate = new Date(tournamentDetails.details.finishDate);
  let recents = {
    results: [],
    fixtures: [],
    showWinners: false
  };

  if (dateFns.isAfter(today, finishDate)) {
    recents.showWinners = true;
    recents.winner = tournamentDetails.details.winner;
    recents.runnerUp = tournamentDetails.details.runnerUp;
  } else {
    recents.results = getResults(tournamentDetails.fixtures, limit);
    recents.fixtures = getFixtures(tournamentDetails.fixtures, limit);
  }

  return recents;
};

export default {
  getResults,
  getFixtures,
  getRecentFixtures
};

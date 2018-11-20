const HOME = '/';
const CHESS = '/chess';
const FUTSAL = '/futsal';
const OTHERS = '/others';
const CARROM_BOARD = '/carrom-board';
const TABLE_TENNIS = '/table-tennis';

/* Other games routes */
const OTHER_GAMES_BASE_ROUTES = {
  DASHAIN_CUP: `${OTHERS}/dashain-cup`
};

export const BASE_ROUTES = {
  HOME,
  CHESS,
  FUTSAL,
  OTHERS,
  CARROM_BOARD,
  TABLE_TENNIS,
  OTHER_GAMES_BASE_ROUTES
};

export const FUTSAL_ROUTES = {
  HOME: `${FUTSAL}/recent`,
  TEAMS: `${FUTSAL}/teams`,
  STATS: `${FUTSAL}/stats`,
  POINTS: `${FUTSAL}/points`,
  RESULTS: `${FUTSAL}/results`,
  FIXTURES: `${FUTSAL}/fixtures`,
  FIXTURE: `${FUTSAL}/fixture/:fixtureId`,
};

export const CARROM_BOARD_ROUTES = {
  HOME: `${CARROM_BOARD}/recent`,
  TEAMS: `${CARROM_BOARD}/teams`,
  RESULTS: `${CARROM_BOARD}/results`,
  FIXTURES: `${CARROM_BOARD}/fixtures`,
  FIXTURE: `${CARROM_BOARD}/fixture/:fixtureId`,
};

export const OTHER_GAMES_ROUTES = {
  DASHAIN_CUP: {
    HOME: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/recent`,
    TEAMS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/teams`,
    STATS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/stats`,
    POINTS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/points`,
    RESULTS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/results`,
    FIXTURES: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/fixtures`,
    FIXTURE: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/fixture/:fixtureId`
  }
};

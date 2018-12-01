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

// Order of route declaration appears on the UI.
export const FUTSAL_ROUTES = {
  HOME: `${FUTSAL}/recent`,
  RESULTS: `${FUTSAL}/results`,
  FIXTURES: `${FUTSAL}/fixtures`,
  POINTS: `${FUTSAL}/points`,
  STATS: `${FUTSAL}/stats`,
  TEAMS: `${FUTSAL}/teams`,
  FIXTURE: `${FUTSAL}/fixture/:fixtureId`,
};

// Order of route declaration appears on the UI.
export const CARROM_BOARD_ROUTES = {
  HOME: `${CARROM_BOARD}/recent`,
  RESULTS: `${CARROM_BOARD}/results`,
  FIXTURES: `${CARROM_BOARD}/fixtures`,
  TEAMS: `${CARROM_BOARD}/teams`,
  FIXTURE: `${CARROM_BOARD}/fixture/:fixtureId`
};

// Order of route declaration appears on the UI.
export const TABLE_TENNIS_ROUTES = {
  HOME: `${TABLE_TENNIS}/recent`,
  RESULTS: `${TABLE_TENNIS}/results`,
  FIXTURES: `${TABLE_TENNIS}/fixtures`,
  TEAMS: `${TABLE_TENNIS}/teams`,
  FIXTURE: `${TABLE_TENNIS}/fixture/:fixtureId`,
};

// Order of route declaration appears on the UI.
export const OTHER_GAMES_ROUTES = {
  DASHAIN_CUP: {
    HOME: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/recent`,
    RESULTS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/results`,
    FIXTURES: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/fixtures`,
    POINTS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/points`,
    STATS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/stats`,
    TEAMS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/teams`,
    FIXTURE: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/fixture/:fixtureId`
  }
};

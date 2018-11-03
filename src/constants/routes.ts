const HOME = '/';
const CHESS = '/chess';
const FUTSAL = '/futsal';
const OTHERS = '/others';
const CARROM_BOARD = '/carrom-board';
const TABLE_TENNIS = '/table-tennis';

/* Other games routes */
const OTHERS_DASHAIN_CUP = `${OTHERS}/dashain-cup`;

export const BASE_ROUTES = {
  HOME,
  CHESS,
  FUTSAL,
  OTHERS,
  CARROM_BOARD,
  TABLE_TENNIS,
  OTHERS_DASHAIN_CUP
};

export const FUTSAL_ROUTES = {
  HOME: `${FUTSAL}/recent`,
  TEAMS: `${FUTSAL}/teams`,
  STATS: `${FUTSAL}/stats`,
  POINTS: `${FUTSAL}/points`,
  RESULTS: `${FUTSAL}/results`,
  FIXTURES: `${FUTSAL}/fixtures`,
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
    HOME: `${OTHERS_DASHAIN_CUP}/recent`,
    TEAMS: `${OTHERS_DASHAIN_CUP}/teams`,
    STATS: `${OTHERS_DASHAIN_CUP}/stats`,
    POINTS: `${OTHERS_DASHAIN_CUP}/points`,
    RESULTS: `${OTHERS_DASHAIN_CUP}/results`,
    FIXTURES: `${OTHERS_DASHAIN_CUP}/fixtures`
  }
};

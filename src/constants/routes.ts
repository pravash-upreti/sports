const HOME = '/';
const CHESS = '/chess';
const FUTSAL = '/futsal';
const CARROM_BOARD = '/carrom-board';
const TABLE_TENNIS = '/table-tennis';
const DASHAIN_CUP = '/dashain-cup';

export const BASE_ROUTES = {
  HOME,
  CHESS,
  FUTSAL,
  DASHAIN_CUP,
  CARROM_BOARD,
  TABLE_TENNIS,
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

export const DASHAIN_CUP_ROUTES = {
  HOME: `${DASHAIN_CUP}/recent`,
  TEAMS: `${DASHAIN_CUP}/teams`,
  STATS: `${DASHAIN_CUP}/stats`,
  POINTS: `${DASHAIN_CUP}/points`,
  RESULTS: `${DASHAIN_CUP}/results`,
  FIXTURES: `${DASHAIN_CUP}/fixtures`,
};

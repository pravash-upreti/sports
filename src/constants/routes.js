const HOME = '/';
const CHESS = '/chess';
const FUTSAL = '/futsal';
const CARROM_BOARD = '/carrom-board';
const TABLE_TENNIS = '/table-tennis';

export const BASE_ROUTES = {
  HOME: HOME,
  CHESS: CHESS,
  FUTSAL: FUTSAL,
  CARROM_BOARD: CARROM_BOARD,
  TABLE_TENNIS: TABLE_TENNIS
};

export const FUTSAL_ROUTES = {
  HOME: `${FUTSAL}/recent`,
  TEAMS: `${FUTSAL}/teams`,
  STATS: `${FUTSAL}/stats`,
  POINTS: `${FUTSAL}/points`,
  RESULTS: `${FUTSAL}/results`,
  FIXTURES: `${FUTSAL}/fixture`
};

export const CARROM_BOARD_ROUTES = {
  HOME: `${CARROM_BOARD}/recent`,
  TEAMS: `${CARROM_BOARD}/teams`,
  RESULTS: `${CARROM_BOARD}/results`,
  FIXTURES: `${CARROM_BOARD}/fixture`
};

const HOME = '/';
const CHESS = '/chess/:season';
const FUTSAL = '/futsal/:season';
const DASHAIN_CUP = '/dashain-cup/:season';
const CARROM_BOARD = '/carrom-board/:season';
const TABLE_TENNIS = '/table-tennis/:season';


export const BASE_ROUTES = {
  HOME,
  CHESS,
  FUTSAL,
  DASHAIN_CUP,
  CARROM_BOARD,
  TABLE_TENNIS
};

// Order of route declaration appears on the UI.
export const FUTSAL_ROUTES = {
  HOME: `${FUTSAL}/`,
  RESULTS: `${FUTSAL}/results`,
  FIXTURES: `${FUTSAL}/fixtures`,
  POINTS: `${FUTSAL}/points`,
  STATS: `${FUTSAL}/stats`,
  TEAMS: `${FUTSAL}/teams`,
  FIXTURE: `${FUTSAL}/fixture/:fixtureId`,
};

// Order of route declaration appears on the UI.
export const CARROM_BOARD_ROUTES = {
  HOME: `${CARROM_BOARD}/`,
  RESULTS: `${CARROM_BOARD}/results`,
  FIXTURES: `${CARROM_BOARD}/fixtures`,
  TEAMS: `${CARROM_BOARD}/teams`,
  FIXTURE: `${CARROM_BOARD}/fixture/:fixtureId`
};

// Order of route declaration appears on the UI.
export const TABLE_TENNIS_ROUTES = {
  HOME: `${TABLE_TENNIS}/`,
  RESULTS: `${TABLE_TENNIS}/results`,
  FIXTURES: `${TABLE_TENNIS}/fixtures`,
  TEAMS: `${TABLE_TENNIS}/teams`,
  FIXTURE: `${TABLE_TENNIS}/fixture/:fixtureId`,
};

// Order of route declaration appears on the UI.
// export const OTHER_GAMES_ROUTES = {
//   DASHAIN_CUP: {
//     HOME: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/recent`,
//     RESULTS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/results`,
//     FIXTURES: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/fixtures`,
//     POINTS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/points`,
//     STATS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/stats`,
//     TEAMS: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/teams`,
//     FIXTURE: `${OTHER_GAMES_BASE_ROUTES.DASHAIN_CUP}/fixture/:fixtureId`
//   }
// };

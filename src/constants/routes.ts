const HOME = '/';
const FIFA = '/:sport/fifa18';
const CHESS = '/chess/:season';
const FUTSAL = '/futsal/:season';
const DASHAIN_CUP = '/dashain-cup/:season';
const CARROM_BOARD = '/carrom-board/:season';
const TABLE_TENNIS = '/table-tennis/:season';
const COUNTER_STRIKE = '/:sport/counter-strike';


export const BASE_ROUTES = {
  HOME,
  FIFA,
  CHESS,
  FUTSAL,
  DASHAIN_CUP,
  CARROM_BOARD,
  TABLE_TENNIS,
  COUNTER_STRIKE
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
export const DASHAIN_CUP_ROUTES = {
  HOME: `${DASHAIN_CUP}/`,
  RESULTS: `${DASHAIN_CUP}/results`,
  FIXTURES: `${DASHAIN_CUP}/fixtures`,
  POINTS: `${DASHAIN_CUP}/points`,
  STATS: `${DASHAIN_CUP}/stats`,
  TEAMS: `${DASHAIN_CUP}/teams`,
  FIXTURE: `${DASHAIN_CUP}/fixture/:fixtureId`,
};

// Order of route declaration appears on the UI.
export const COUNTER_STRIKE_ROUTES = {
  HOME: `${COUNTER_STRIKE}/`,
  RESULTS: `${COUNTER_STRIKE}/results`,
  FIXTURES: `${COUNTER_STRIKE}/fixtures`,
  POINTS: `${COUNTER_STRIKE}/points`,
  TEAMS: `${COUNTER_STRIKE}/teams`,
  FIXTURE: `${COUNTER_STRIKE}/fixture/:fixtureId`,
};

// Order of route declaration appears on the UI.
export const FIFA_ROUTES = {
  HOME: `${FIFA}/`,
  RESULTS: `${FIFA}/results`,
  FIXTURES: `${FIFA}/fixtures`,
  TEAMS: `${FIFA}/teams`,
  FIXTURE: `${FIFA}/fixture/:fixtureId`,
};

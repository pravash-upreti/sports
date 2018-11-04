export interface PlayerInterface {
  id: number;
  name: string;
  team?: TeamInterface;
  isCaptain?: boolean;
}

export interface ParticipantLogoInterface {
  text?: string;
  color?: string;
  backgroundColor?: string;
}

export interface TeamInterface {
  id: number;
  name: string;
  logo?: ParticipantLogoInterface;
  players?: PlayerInterface[];
}

export interface StatInterface {
  name: PlayerInterface;
  count: number;
}

export interface PointInterface {
  id?: number;
  team: TeamInterface;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface StatsInterface {
  goals?: StatInterface[];
  redCards?: StatInterface[];
  yellowCards?: StatInterface[];
}

export interface ActivityInterface {
  id: number;
  fixtureId: number;
  player: PlayerInterface;
  team: TeamInterface;
  time?: number | string;
  points?: number;
}

export interface RoundInterface {
  id: number;
  description: string;
}

export interface StatusInterface {
  id: number;
  description: string;
}

export interface CategoryInterface {
  id: number;
  description: string;
}

export interface DetailsInterface {
  title: string;
  year: number;
  startDate: string;
  finishDate: string;
  winner: string;
  runnerUp: string;
}

export interface FixtureInterface {
  id: number;
  date: string;
  homeTeam: TeamInterface;
  homeTeamScore: number;
  homeTeamHalfTimeScore?: number;
  awayTeam: TeamInterface;
  awayTeamScore: number;
  awayTeamHalfTimeScore?: number;
  status: string;
  activities?: ActivityInterface[];
}

export interface RecentsInterface {
  results: FixtureInterface[];
  fixtures: FixtureInterface[];
  winner: string | null;
  runnerUp: string | null;
  showWinners: boolean;
}

export interface TournamentDataResponseInterface {
  details: DetailsInterface;
  teams: TeamInterface[];
  fixtures: FixtureInterface[];
  stats?: StatsInterface[];
  table?: PointInterface[];
  rounds?: RoundInterface[];
  categories?: CategoryInterface[];
  statuses?: StatusInterface[];
}

export interface TournamentDataInterface {
  teams: TeamInterface[];
  rounds?: RoundInterface[];
  details: DetailsInterface;
  statuses?: StatusInterface[];
  categories?: CategoryInterface[];
  recents: RecentsInterface;
  results: FixtureInterface[];
  fixtures: FixtureInterface[];
  allFixtures?: FixtureInterface[];
  points?: PointInterface[];
  stats?: StatsInterface[];
}

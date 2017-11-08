import * as TournamentDao from '../daos/tournament';

export const getTournament = async (tournamentId: number) => {
  return TournamentDao.findOne(tournamentId);
};

export let getAllTournaments = async () => {
  return TournamentDao.fetchAll();
};

export let addTournament = async (data: any) => {
  return TournamentDao.addTournament(data);
};

export let getTournamentCategories = async (tournamentId: number) => {
  return TournamentDao.getTournamentCategories(tournamentId);
};

export let addTournamentCategory = async (tournamentId: number, data: any) => {
  return TournamentDao.addTournamentCategory(tournamentId, data.category_id);
};

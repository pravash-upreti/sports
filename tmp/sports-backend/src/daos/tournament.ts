import Tournament from '../models/tournament';
import TournamentCategory from '../models/tournament_category';

export const findOne = (tournamentId: number) => {
  return new Tournament({id: tournamentId}).fetch();
};

export const fetchAll = async () => {
  return Tournament.fetchAll();
};

export const addTournament = async (data: any) => {
  return new Tournament(data).save();
};

export const getTournamentCategories = async (tournamentId: number) => {
  return new TournamentCategory().where('tournament_id', '=', tournamentId).fetchAll();
};

export const addTournamentCategory = async (tournamentId: number, categoryId: number) => {
  return new TournamentCategory({tournament_id: tournamentId, category_id: categoryId}).save();
};

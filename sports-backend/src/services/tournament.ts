import Tournament from '../models/tournament';

export let getAllTournaments = async () => {
  return Tournament.fetchAll();
};

export let addTournament = (data: any) => {
  return new Tournament(data).save();
};

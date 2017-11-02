import Player from '../models/player';

export let getAllPlayers = async () => {
  return Player.fetchAll();
};

export let addPlayer = async (data: any) => {
  return new Player(data).save();
};

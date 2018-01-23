import Season from '../models/season';

export let getAllSeasons = async () => {
  return Season.fetchAll();
};

export let addSeason = async (data: any) => {
  return new Season(data).save();
};

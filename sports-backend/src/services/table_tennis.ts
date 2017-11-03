import TtMatch from '../models/table_tennis/tt_match';

export let getMatches = async () => {
  return TtMatch.fetchAll();
};

export let addMatch = async (data: any) => {
  return new TtMatch(data).save();
};

import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class TournamentCategory extends BookShelf.Model<TournamentCategory> {
  get tableName() {
    return TABLES.TOURNAMENT_CATEGORY;
  }

  timestamp() {
    return true;
  }
}

export default TournamentCategory;

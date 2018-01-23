import BookShelf from './bookshelf';
import CONSTANTS from '../utils/constants';

class TournamentCategory extends BookShelf.Model <TournamentCategory> {
  get tableName() {
    return CONSTANTS.TABLES.TOURNAMENT_CATEGORY;
  }
}

export default TournamentCategory;

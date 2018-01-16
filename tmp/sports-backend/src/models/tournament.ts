import BookShelf from './bookshelf';
import CONSTANTS from '../utils/constants';

class Tournament extends BookShelf.Model<Tournament> {
  get tableName() {
    return CONSTANTS.TABLES.TOURNAMENT;
  }
}

export default Tournament;

import { TABLES } from './../utils/constants';
import BookShelf from '../config/bookshelf';

class Tournament extends BookShelf.Model<Tournament> {
  get tableName() {
    return TABLES.TOURNAMENT;
  }

  timestamp() {
    return true;
  }
}

export default Tournament;

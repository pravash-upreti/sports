import BookShelf from '../config/bookshelf';
import { TABLES } from './../utils/constants';

class Tournament extends BookShelf.Model<Tournament> {
  get tableName() {
    return TABLES.TOURNAMENT;
  }

  timestamp() {
    return true;
  }
}

export default Tournament;

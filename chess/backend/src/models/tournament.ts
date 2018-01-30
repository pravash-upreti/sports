import { TABLES } from './../utils/constants';
import BookShelf from '../config/bookshelf';

class Tournament extends BookShelf.Model<Tournament> {
  getTableName() {
    return TABLES.TOURNAMENT;
  }
}

export default Tournament;

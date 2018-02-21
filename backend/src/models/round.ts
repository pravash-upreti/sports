import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class Round extends BookShelf.Model<Round> {
  get tableName() {
    return TABLES.ROUND;
  }

  timestamp() {
    return true;
  }
}

export default Round;

import BookShelf from './bookshelf';
import CONSTANTS from '../utils/constants';

class Season extends BookShelf.Model<Season> {
  get tableName() {
    return CONSTANTS.TABLES.SEASON;
  }
}

export default Season;

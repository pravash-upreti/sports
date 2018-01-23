import BookShelf from '../bookshelf';
import CONSTANTS from '../../utils/constants';

class TtMatch extends BookShelf.Model<TtMatch> {
  get tableName() {
    return CONSTANTS.TABLES.TT_MATCH;
  }
}

export default TtMatch;

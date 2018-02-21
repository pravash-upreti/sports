import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class FixtureStatus extends BookShelf.Model<FixtureStatus> {
  get tableName() {
    return TABLES.FIXTURE_STATUS;
  }

  timestamp() {
    return true;
  }
}

export default FixtureStatus;

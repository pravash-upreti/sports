import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class Team extends BookShelf.Model<Team> {
  get tableName() {
    return TABLES.TEAM;
  }

  timestamp() {
    return true;
  }
}

export default Team;

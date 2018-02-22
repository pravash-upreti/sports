import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class TeamPlayer extends BookShelf.Model<TeamPlayer> {
  get tableName() {
    return TABLES.TEAM_PLAYER;
  }

  timestamp() {
    return true;
  }
}

export default TeamPlayer;

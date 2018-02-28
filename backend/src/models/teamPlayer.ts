import Team from './team';
import Player from './player';
import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class TeamPlayer extends BookShelf.Model<TeamPlayer> {
  get tableName() {
    return TABLES.TEAM_PLAYER;
  }

  timestamp() {
    return true;
  }

  team() {
    return this.belongsTo(Team);
  }

  player() {
    return this.belongsTo(Player);
  }
}

export default TeamPlayer;

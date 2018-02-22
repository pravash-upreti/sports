import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class Player extends BookShelf.Model<Player> {
  get tableName() {
    return TABLES.PLAYER;
  }

  timestamp() {
    return true;
  }
}

export default Player;

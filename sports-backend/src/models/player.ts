import BookShelf from './bookshelf';
import CONSTANTS from '../utils/constants';

class Player extends BookShelf.Model<Player> {
  get tableName() {
    return CONSTANTS.TABLES.PLAYER;
  }
}

export default Player;

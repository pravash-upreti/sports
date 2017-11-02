import BookShelf from './bookshelf';

class Player extends BookShelf.Model<Player> {
  get tableName() {
    return 'player';
  }
}

export default Player;

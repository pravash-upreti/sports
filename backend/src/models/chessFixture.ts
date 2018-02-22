import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class ChessFixture extends BookShelf.Model<ChessFixture> {
  get tableName() {
    return TABLES.CHESS_FIXTURE;
  }

  timestamp() {
    return true;
  }
}

export default ChessFixture;

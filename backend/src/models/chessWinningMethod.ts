import BookShelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class ChessWinningMethod extends BookShelf.Model<ChessWinningMethod> {
  get tableName() {
    return TABLES.CHESS_WINNING_METHOD;
  }

  timestamp() {
    return true;
  }
}

export default ChessWinningMethod;

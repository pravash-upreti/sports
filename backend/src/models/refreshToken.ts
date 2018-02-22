import Bookshelf from '../config/bookshelf';
import { TABLES } from '../constants/tables';

class RefreshToken extends Bookshelf.Model<RefreshToken> {
  get tableName() {
    return TABLES.REFRESH_TOKEN;
  }

  timestamp() {
    return true;
  }
}

export default RefreshToken;

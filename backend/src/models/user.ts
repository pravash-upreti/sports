import BookShelf from '../config/bookshelf';
import { TABLES } from './../constants/tables';

class User extends BookShelf.Model<User> {
  get tableName() {
    return TABLES.USER;
  }

  timestamp() {
    return true;
  }
}

export default User;

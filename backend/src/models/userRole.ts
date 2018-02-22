import BookShelf from '../config/bookshelf';
import { TABLES } from './../constants/tables';

class UserRole extends BookShelf.Model<UserRole> {
  get tableName() {
    return TABLES.USER_ROLE;
  }

  timestamp() {
    return true;
  }
}

export default UserRole;

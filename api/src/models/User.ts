import TABLES from '../constants/tables';

import BaseModel from './BaseModel';

class User extends BaseModel<User> {
  get tableName() {
    return TABLES.USERS;
  }
}

export default User;

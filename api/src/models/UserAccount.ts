import TABLES from '../constants/tables';

import BaseModel from './BaseModel';

class UserAccount extends BaseModel<UserAccount> {
  get tableName() {
    return TABLES.USER_ACCOUNTS;
  }
}

export default UserAccount;

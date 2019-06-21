import Knex from 'knex';

import TABLES from '../../constants/tables';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(TABLES.USER_ACCOUNTS)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(TABLES.USER_ACCOUNTS).insert([
        { id: 1, employee_id: 1, user_role_id: 1, password: 'super_admin@123', is_active: true }
      ]);
    });
}

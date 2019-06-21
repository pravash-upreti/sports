import Knex from 'knex';

import TABLES from '../../constants/tables';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(TABLES.USER_ROLES)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(TABLES.USER_ROLES).insert([
        { id: 1, name: 'Super Admin' },
        { id: 2, name: 'Admin' },
        { id: 3, name: 'User' }
      ]);
    });
}

import Knex from 'knex';

import TABLES from '../../constants/tables';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(TABLES.FOOTBALL_ACTIVITY_TYPES)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(TABLES.FOOTBALL_ACTIVITY_TYPES).insert([
        { id: 1, name: 'Goal' },
        { id: 2, name: 'Own Goal' },
        { id: 3, name: 'Red Card' },
        { id: 4, name: 'Yellow Card' },
        { id: 5, name: 'Double Yellow Card' }
      ]);
    });
}

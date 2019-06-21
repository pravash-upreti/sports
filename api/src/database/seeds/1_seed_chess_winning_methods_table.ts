import Knex from 'knex';

import TABLES from '../../constants/tables';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex(TABLES.CHESS_WINNING_METHODS)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(TABLES.CHESS_WINNING_METHODS).insert([{ id: 1, name: 'Time' }, { id: 2, name: 'Checkmate' }]);
    });
}

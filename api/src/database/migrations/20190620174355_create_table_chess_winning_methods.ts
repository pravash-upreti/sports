import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add chess_winning_methods table.
 *
 * @param {Knex} knex
 */
export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(TABLES.CHESS_WINNING_METHODS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name').notNullable();

    table.timestamps(true, true);
  });
}

/**
 * Drop chess_winning_methods table.
 *
 * @param {Knex} knex
 */
export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(TABLES.CHESS_WINNING_METHODS);
}

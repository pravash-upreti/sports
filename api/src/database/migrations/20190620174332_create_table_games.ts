import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add games table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.GAMES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name').notNullable();
    table.string('short_name').notNullable();
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop games table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.GAMES);
}

import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add tournaments table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.TOURNAMENTS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('game_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.GAMES);
    table.string('season').notNullable();
    table.timestamp('start_date');
    table.timestamp('finish_date');
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop tournaments table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.TOURNAMENTS);
}

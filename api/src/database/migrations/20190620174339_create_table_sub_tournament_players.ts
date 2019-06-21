import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add sub_tournament_players table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.SUB_TOURNAMENT_PLAYERS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('sub_tournament_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.SUB_TOURNAMENTS);
    table
      .integer('employee_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.EMPLOYEES);
    table.string('position');
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop sub_tournament_players table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.SUB_TOURNAMENT_PLAYERS);
}

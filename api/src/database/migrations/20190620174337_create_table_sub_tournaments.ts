import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add sub_tournaments table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.SUB_TOURNAMENTS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('tournament_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.TOURNAMENTS);
    table
      .integer('category_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.CATEGORIES);
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop sub_tournaments table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.SUB_TOURNAMENTS);
}

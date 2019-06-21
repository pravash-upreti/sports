import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add football_activity_types table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.FOOTBALL_ACTIVITY_TYPES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('name').notNullable();
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop football_activity_types table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.FOOTBALL_ACTIVITY_TYPES);
}

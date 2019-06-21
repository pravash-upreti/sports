import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add football_activity_types table.
 *
 * @param {Knex} knex
 */
export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(TABLES.FOOTBALL_ACTIVITY_TYPES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name').notNullable();

    table.timestamps(true, true);
  });
}

/**
 * Drop football_activity_types table.
 *
 * @param {Knex} knex
 */
export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(TABLES.FOOTBALL_ACTIVITY_TYPES);
}

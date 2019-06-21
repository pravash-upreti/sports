import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add user_roles table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.USER_ROLES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name').notNullable();

    table.timestamps(true, true);
  });
}

/**
 * Drop user_roles table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.USER_ROLES);
}

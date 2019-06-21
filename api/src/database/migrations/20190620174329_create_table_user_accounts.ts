import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add user_accounts table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.USER_ACCOUNTS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('employee_id')
      .notNullable()
      .unique();
    table
      .integer('user_role_id')
      .unsigned()
      .references('id')
      .inTable(TABLES.USER_ROLES);
    table.string('password').notNullable();
    table
      .boolean('is_active')
      .notNullable()
      .defaultTo(false);

    table.timestamps(true, true);
  });
}

/**
 * Drop user_accounts table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.USER_ACCOUNTS);
}

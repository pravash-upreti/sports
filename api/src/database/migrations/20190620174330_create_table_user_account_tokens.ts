import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add user_account_tokens table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.USER_ACCOUNT_TOKENS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('user_account_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS)
      .unique();
    table.string('refresh_token').notNullable();

    table.timestamps(true, true);
  });
}

/**
 * Drop user_account_tokens table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.USER_ACCOUNT_TOKENS);
}

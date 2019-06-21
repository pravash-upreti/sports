import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add dota_scores table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.DOTA_SCORES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('fixture_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FIXTURES);
    table.integer('sets_count').notNullable();
    table
      .integer('winner_team')
      .notNullable()
      .references('id')
      .inTable(TABLES.TEAMS);
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop dota_scores table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.DOTA_SCORES);
}

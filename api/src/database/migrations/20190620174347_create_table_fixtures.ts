import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add fixtures table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.FIXTURES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('sub_tournament_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.SUB_TOURNAMENTS);
    table
      .integer('status_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.STATUSES);
    table.timestamp('event_date');
    table
      .integer('home_team_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.TEAMS);
    table
      .integer('away_team_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.TEAMS);
    table
      .integer('round_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.ROUNDS);
    table
      .integer('home_team_parent_fixture_id')
      .references('id')
      .inTable(TABLES.FIXTURES);
    table
      .integer('away_team_parent_fixture_id')
      .references('id')
      .inTable(TABLES.FIXTURES);
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop fixtures table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.FIXTURES);
}

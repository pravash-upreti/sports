import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add football_score_activities table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.FOOTBALL_SCORE_ACTIVITIES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('fixture_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FIXTURES);
    table
      .integer('team_player_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.TEAM_PLAYERS);
    table
      .integer('activity_type_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FOOTBALL_ACTIVITY_TYPES);
    table
      .integer('assisted_by')
      .references('id')
      .inTable(TABLES.TEAM_PLAYERS);
    table.string('activity_time');
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop football_score_activities table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.FOOTBALL_SCORE_ACTIVITIES);
}

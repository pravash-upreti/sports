import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add table_tennis_score_activities table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.TABLE_TENNIS_SCORE_ACTIVITIES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('fixture_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FIXTURES);
    table.integer('set').notNullable();
    table.integer('home_team_points').notNullable();
    table.integer('away_team_points').notNullable();
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop table_tennis_score_activities table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.TABLE_TENNIS_SCORE_ACTIVITIES);
}

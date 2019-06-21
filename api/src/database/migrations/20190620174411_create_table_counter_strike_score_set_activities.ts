import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add counter_strike_score_set_activities table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.COUNTER_STRIKE_SCORE_SET_ACTIVITIES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('set').notNullable();
    table
      .integer('team_player_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.TEAM_PLAYERS);
    table.integer('kills').notNullable();
    table.integer('deaths').notNullable();
    table.integer('assists').notNullable();
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop counter_strike_score_set_activities table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.COUNTER_STRIKE_SCORE_SET_ACTIVITIES);
}

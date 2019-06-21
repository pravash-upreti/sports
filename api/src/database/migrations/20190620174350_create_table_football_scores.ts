import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add football_scores table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.FOOTBALL_SCORES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('fixture_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FIXTURES);
    table.integer('home_team_ht_score');
    table.integer('away_team_ht_score');
    table.integer('home_team_ft_score');
    table.integer('away_team_ft_score');
    table.integer('home_team_aet_score');
    table.integer('away_team_aet_score');
    table.integer('home_team_penalty_score');
    table.integer('away_team_penalty_score');
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop football_scores table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.FOOTBALL_SCORES);
}

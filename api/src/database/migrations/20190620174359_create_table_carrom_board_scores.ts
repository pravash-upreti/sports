import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add carrom_board_scores table.
 *
 * @param {Knex} knex
 */
export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(TABLES.CARROM_BOARD_SCORES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('fixture_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FIXTURES);
    table.integer('home_team_score').notNullable();
    table.integer('away_team_score').notNullable();
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop carrom_board_scores table.
 *
 * @param {Knex} knex
 */
export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(TABLES.CARROM_BOARD_SCORES);
}

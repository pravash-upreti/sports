import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add team_players table.
 *
 * @param {Knex} knex
 */
export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable(TABLES.TEAM_PLAYERS, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('team_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.TEAMS);
    table
      .integer('player_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.SUB_TOURNAMENT_PLAYERS);
    table
      .boolean('is_captain')
      .notNullable()
      .defaultTo(false);
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop team_players table.
 *
 * @param {Knex} knex
 */
export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable(TABLES.TEAM_PLAYERS);
}

import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('team_player', table => {
    table.increments('id').primary();

    table
      .integer('team_id')
      .unsigned()
      .references('tournament.id')
      .nullable();

    table
      .integer('player_id')
      .unsigned()
      .references('player.id')
      .nullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('team_player');
}

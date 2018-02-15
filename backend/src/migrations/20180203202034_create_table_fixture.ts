import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('fixture', table => {
    table.increments('id').primary();

    table
      .integer('player_1_id')
      .unsigned()
      .references('player.id')
      .nullable();

    table
      .integer('player_2_id')
      .unsigned()
      .references('player.id')
      .nullable();

    table
      .integer('winner_player_id')
      .unsigned()
      .references('player.id')
      .nullable();

    table
      .integer('round_id')
      .unsigned()
      .references('round.id')
      .notNullable();

    table
      .integer('winning_method_id')
      .unsigned()
      .references('winning_method.id')
      .nullable();

    table
      .integer('status_id')
      .unsigned()
      .references('fixture_status.id')
      .notNullable();

    table
      .integer('tournament_id')
      .unsigned()
      .references('tournament.id')
      .notNullable();

    table.date('fixture_date').notNullable();

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('fixture');
}

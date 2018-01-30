import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('match', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('player_1_id')
      .notNullable()
      .unsigned()
      .references('player.id');
    table
      .integer('player_2_id')
      .notNullable()
      .unsigned()
      .references('player.id');
    table
      .integer('winner_player_id')
      .notNullable()
      .unsigned()
      .references('player.id');
    table.string('won_by', 100).nullable();
    table.dateTime('date').nullable();
    table
      .integer('round_id')
      .notNullable()
      .unsigned()
      .references('round.id');
    table
      .integer('tournament_id')
      .notNullable()
      .unsigned()
      .references('tournament.id');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('match');
}

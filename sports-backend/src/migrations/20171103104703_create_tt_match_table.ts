import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('tt_match', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('tournament_id').notNullable().unsigned().references('tournament.id');
    table.integer('round_id').notNullable().unsigned().references('round.id');
    table.integer('player_1_id').nullable().unsigned().references('player.id');
    table.integer('player_2_id').nullable().unsigned().references('player.id');
    table.dateTime('fixture_date').nullable();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('tt_match');
};

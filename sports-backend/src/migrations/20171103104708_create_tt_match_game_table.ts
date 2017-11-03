import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('tt_match_game', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('order').notNullable();
    table.integer('player_1_score').notNullable().defaultTo(0);
    table.integer('player_2_score').notNullable().defaultTo(0);
    table.integer('match_id').notNullable().unsigned().references('tt_match.id');

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('tt_match_game');
};

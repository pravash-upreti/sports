import * as Knex from 'knex';

exports.up = async function (knex: Knex) {
  return knex.schema.createTable('player_tournament_season', (table: Knex.CreateTableBuilder) => {
      table.increments('id').primary();

      table.integer('player_id').notNullable().unsigned().references('player.id');
      table.integer('tournament_season_id').notNullable().unsigned().references('tournament_season.id');

      table.dateTime('created_at').defaultTo(knex.fn.now());
      table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex: Knex) {
  return knex.schema.dropTable('player_tournament_season');
};

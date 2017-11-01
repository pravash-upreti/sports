import * as Knex from 'knex';

exports.up = async function (knex: Knex) {
  return knex.schema.createTable('tournament_season', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('tournament_id').notNullable().unsigned().references('tournament.id');
    table.integer('season_id').notNullable().unsigned().references('season.id');

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex: Knex) {
  return knex.schema.dropTable('tournament_season');
};

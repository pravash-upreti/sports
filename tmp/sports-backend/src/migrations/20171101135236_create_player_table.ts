import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('player', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('full_name', 255).notNullable();
    table.string('gender', 1).notNullable();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('player');
};

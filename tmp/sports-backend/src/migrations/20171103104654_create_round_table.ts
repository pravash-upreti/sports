import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('round', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name', 50).notNullable();
    table.integer('number_of_matches').notNullable();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('round');
};

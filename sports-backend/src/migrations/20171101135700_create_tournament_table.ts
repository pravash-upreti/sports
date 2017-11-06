import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  return knex.schema.createTable('tournament', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('title', 100).notNullable();
    table.integer('season').notNullable();
    table.date('start_date').notNullable();
    table.date('finish_date').nullable();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async (knex: Knex) => {
  return knex.schema.dropTable('tournament');
};

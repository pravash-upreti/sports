import * as Knex from 'knex';

exports.up = async function (knex: Knex) {
  return knex.schema.createTable('season', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.integer('value').notNullable();
    table.date('event_date').notNullable();

    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex: Knex) {
  return knex.schema.dropTable('season');
};

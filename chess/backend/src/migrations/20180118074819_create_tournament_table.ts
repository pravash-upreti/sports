import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable('tournament', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('title', 100).notNullable();
    table.date('start_date').notNullable();
    table.date('finish_date').nullable();

    table.timestamps(true, true);
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable('tournament');
};

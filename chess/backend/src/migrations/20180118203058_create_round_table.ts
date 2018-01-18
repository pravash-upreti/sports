import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable('round', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('name', 50).notNullable();
    table.string('desc', 100).notNullable();

    table.timestamps(true, true);
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable('round');
};

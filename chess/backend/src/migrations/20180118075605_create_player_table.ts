import * as Knex from 'knex';

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.createTable('player', (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table.string('full_name', 255).notNullable();
    table.string('gender', 1).notNullable();
    table.string('profile_photo', 255).notNullable();

    table.timestamps(true, true);
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTable('player');
};

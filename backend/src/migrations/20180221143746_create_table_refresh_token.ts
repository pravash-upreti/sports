import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('refresh_token', table => {
    table.increments('id').primary();

    table
      .string('token')
      .notNullable()
      .unique();
    table
      .integer('user_id')
      .notNullable()
      .unique()
      .references('user.id');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('refresh_token');
}

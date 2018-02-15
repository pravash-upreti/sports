import * as Knex from 'knex';

export function up(knex: Knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();

    table.string('email', 100).notNullable();
    table.string('password').notNullable();
    table.boolean('is_active').defaultTo(1);
    table
      .integer('role_id')
      .defaultTo(2)
      .unsigned()
      .references('user_role.id');

    table.timestamps(true, true);
  });
}

export function down(knex: Knex) {
  return knex.schema.dropTable('user');
}

import Knex from 'knex';

import TABLES from '../../constants/tables';

/**
 * Add fixture_images table.
 *
 * @param {Knex} knex
 */
export function up(knex: Knex) {
  return knex.schema.createTable(TABLES.FIXTURE_IMAGES, (table: Knex.CreateTableBuilder) => {
    table.increments('id').primary();

    table
      .integer('fixture_id')
      .notNullable()
      .references('id')
      .inTable(TABLES.FIXTURES);
    table.text('image').notNullable();
    table
      .integer('updated_by')
      .notNullable()
      .references('id')
      .inTable(TABLES.USER_ACCOUNTS);

    table.timestamps(true, true);
  });
}

/**
 * Drop fixture_images table.
 *
 * @param {Knex} knex
 */
export function down(knex: Knex) {
  return knex.schema.dropTable(TABLES.FIXTURE_IMAGES);
}

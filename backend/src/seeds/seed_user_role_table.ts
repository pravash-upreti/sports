import * as Knex from 'knex';

import { TABLES } from '../constants/tables';
import { USER_ROLES } from '../constants/fixedModelValues';

/**
 * @export
 * @param {Knex} knex
 * @returns
 */
export function seed(knex: Knex) {
  return knex(TABLES.USER_ROLE)
    .del()
    .then(() => {
      return Promise.all([
        knex(TABLES.USER_ROLE).insert([
          {
            id: USER_ROLES.ADMIN.id,
            desc: USER_ROLES.ADMIN.desc
          },
          {
            id: USER_ROLES.USER.id,
            desc: USER_ROLES.USER.desc
          }
        ])
      ]);
    });
}

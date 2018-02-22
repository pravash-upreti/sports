import * as Knex from 'knex';

import { TABLES } from '../constants/tables';
import { USERS } from '../constants/fixedModelValues';

export function seed(knex: Knex) {
  return knex(TABLES.USER)
    .del()
    .then(() => {
      return Promise.all([
        knex(TABLES.USER).insert([
          {
            id: USERS.ADMIN.id,
            email: USERS.ADMIN.email,
            role_id: USERS.ADMIN.roleId,
            password: USERS.ADMIN.password,
            is_active: USERS.ADMIN.isActive
          }
        ])
      ]);
    });
}

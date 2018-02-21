import * as Knex from 'knex';

import { TABLES } from '../constants/tables';
import { FIXTURE_STATUSES } from '../constants/fixedModelValues';

export function seed(knex: Knex) {
  return knex(TABLES.FIXTURE_STATUS)
    .del()
    .then(() => {
      return Promise.all([
        knex(TABLES.FIXTURE_STATUS).insert([
          {
            id: FIXTURE_STATUSES.PLAYED.id,
            desc: FIXTURE_STATUSES.PLAYED.desc
          },
          {
            id: FIXTURE_STATUSES.CANCELLED.id,
            desc: FIXTURE_STATUSES.CANCELLED.desc
          },
          {
            id: FIXTURE_STATUSES.TBD.id,
            desc: FIXTURE_STATUSES.TBD.desc
          },
          {
            id: FIXTURE_STATUSES.FORFEITED.id,
            desc: FIXTURE_STATUSES.FORFEITED.desc
          }
        ])
      ]);
    });
}

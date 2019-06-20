import { IResolvers } from 'graphql-tools';
import { GraphQLResolveInfo } from 'graphql';

import { Context } from './models';

const resolverMap: IResolvers = {
  Query: {
    projects: async (parent, args, context, info) => {
      const projects = await context.db.raw('select * from project p inner join users u on u.id = p.creator_id');

      return projects.rows;
    },
    project: async (parent, args, context, info) => {
      const { id } = args;

      if (!id) {
        return null;
      }

      const projects = await context.db.raw(
        'select * from project p inner join users u on u.id = p.creator_id where p.id = ?',
        [id]
      );

      return projects.rows[0];
    },
    users: async (parent, args, context, info) => {
      const users = await context.db.raw('select * from users');

      return users.rows;
    },
    user: async (parent, args, context, info) => {
      const { id } = args;

      if (!id) {
        return null;
      }

      const user = await context.db.raw('select * from users where id = ?', [id]);

      return user.rows[0];
    }
  }
};

export default resolverMap;

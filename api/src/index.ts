import * as path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { makePrismaSchema } from 'nexus-prisma';

import Query from './queries';
import Mutation from './mutations';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';

const schema = makePrismaSchema({
  types: [Query, Mutation],
  prisma: {
    datamodelInfo,
    client: prisma
  },
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  }
});

const server = new GraphQLServer({
  schema,
  context: { prisma }
});

server.start(() => console.log('Server is running on http://localhost:4000'));

import cors from 'cors';
import express from 'express';
import compression from 'compression';
import depthLimit from 'graphql-depth-limit';
import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import knex from './config/knex';

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  context: async () => {
    return {
      db: knex
    };
  }
});
app.use('*', cors());
app.use(compression());
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 3000 }, (): void => console.log(`\n🚀    GraphQL is now running on http://localhost:3000/graphql`));

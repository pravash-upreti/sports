import { stringArg } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    // t.prismaFields(['employees'])
  }
});

export default Query;

import { stringArg, idArg } from 'nexus';
import { prismaObjectType } from 'nexus-prisma';

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['createUserAccount'])
  }
});

export default Mutation;

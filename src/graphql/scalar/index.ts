import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

export const scalar = createModule({
  id: 'scalar',
  typeDefs,
  resolvers,
});

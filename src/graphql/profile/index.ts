import { createModule } from 'graphql-modules';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

export const profile = createModule({
  id: 'profile',
  typeDefs,
  resolvers,
});

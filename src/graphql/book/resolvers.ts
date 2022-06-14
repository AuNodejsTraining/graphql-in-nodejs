import { Resolvers } from 'graphql-modules';
import { books } from './datasets';

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
}

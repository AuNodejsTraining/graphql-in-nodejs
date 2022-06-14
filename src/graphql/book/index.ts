import { gql } from 'apollo-server';
import { createModule } from 'graphql-modules';
import { books } from '../datasets';

export const book = createModule({
  id: 'book',
  typeDefs: gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
  `,
  resolvers: {
    Query: {
      books: () => books,
    },
  },
});

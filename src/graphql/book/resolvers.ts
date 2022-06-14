import { Resolvers } from 'graphql-modules';
import { books } from './datasets';

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
    book: (_: unknown, { id }: { id: string }) => books.find(book => book.id === id),
  },
}

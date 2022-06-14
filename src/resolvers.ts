import { books } from "./datasets"

export const resolvers = {
  Query: {
    books: () => books,
  },
};

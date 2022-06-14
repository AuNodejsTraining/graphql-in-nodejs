import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

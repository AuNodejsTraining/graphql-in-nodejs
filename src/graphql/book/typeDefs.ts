import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  input BookInput {
    title: String!
    author: String!
  }

  type Query {
    books: [Book]!
    book(id: String!): Book!
  }

  type Mutation {
    createBook(book: BookInput!): Book!
  }
`

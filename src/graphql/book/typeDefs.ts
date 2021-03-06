import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

export const typeDefs: DocumentNode = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Event {
    message: String!
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

  type Subscription {
    event: Event!
  }
`

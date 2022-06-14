import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  type Pet {
    id: ID!
    name: String!
    dob: DateType!
    type: String!
    registrationNumber: String!
    photo: String
  }

  type Query {
    pets: [Pet]!
  }
`

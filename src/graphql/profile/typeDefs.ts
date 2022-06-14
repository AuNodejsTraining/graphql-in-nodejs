import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  enum Gender {
    MALE, FEMALE, OTHER
  }

  type Profile {
    id: ID!
    name: String!
    gender: Gender!
    dob: String!
    idCard: String!
    avatar: String
  }

  type Query {
    profile: Profile!
  }
`

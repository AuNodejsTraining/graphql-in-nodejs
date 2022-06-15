import { gql } from 'apollo-server'
import { DocumentNode } from 'graphql'

export const typeDefs: DocumentNode = gql`
  type Pet {
    id: ID!
    name: String!
    dob: DateType!
    type: String!
    registrationNumber: String!
    photo: String @deprecated(reason: "Use avatar.")
    avatar: String
    owner: Profile!
  }

  type Query {
    pets: [Pet]!
  }
`

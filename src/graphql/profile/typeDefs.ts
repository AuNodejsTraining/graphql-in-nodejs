import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

export const typeDefs: DocumentNode = gql`
  """
  This is gender type
  """
  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Profile {
    id: ID!
    name: String!
    gender: Gender!
    dob: DateType!
    idCard: String!
    avatar: String
    pets: [Pet]!
  }

  type Query {
    profile: Profile!
  }
`

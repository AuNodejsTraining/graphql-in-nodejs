import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

export const typeDefs: DocumentNode = gql`
  type Statistics {
    onlineUsers: Int!
  }

  type Subscription {
    statistics: Statistics!
  }
`

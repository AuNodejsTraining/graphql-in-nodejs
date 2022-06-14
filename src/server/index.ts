import { ApolloServer } from 'apollo-server'
import { ApolloServerBuilder } from './ApolloServerBuilder'

export const buildServer = (): Promise<ApolloServer> => {
  const apolloServer = new ApolloServerBuilder()
  return apolloServer.build()
}

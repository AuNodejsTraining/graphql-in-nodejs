import express from 'express'
import { Server, createServer } from 'http'
import { ApolloServerBuilder } from './ApolloServerBuilder'
import { WebSocketServerBuilder } from './WebSocketServerBuilder'
import { application } from '../graphql'

export const buildServer = async (): Promise<Server> => {
  const schema = application.createSchemaForApollo()

  const app = express()
  const httpServer = createServer(app)
  const wsServerBuilder = new WebSocketServerBuilder()
  const serverCleanup = await wsServerBuilder.build(httpServer, schema)
  const apolloServerBuilder = new ApolloServerBuilder()
  const apolloServer = await apolloServerBuilder.build(httpServer, schema,
    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart () {
        return {
          async drainServer () {
            await serverCleanup.dispose()
          }
        }
      }
    })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  return httpServer
}

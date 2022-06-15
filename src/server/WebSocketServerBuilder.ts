import { Server } from 'http'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import { Disposable } from 'graphql-ws/lib/common'
import { BaseServerBuilder } from './BaseServerBuilder'
import { GraphQLSchema } from 'graphql'

export class WebSocketServerBuilder extends BaseServerBuilder {
  async build (httpServer: Server, schema: GraphQLSchema): Promise<Disposable> {
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql'
    })

    const serverCleanup = useServer({ schema }, wsServer)
    return serverCleanup
  }
}

import { Server } from 'http'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import { Disposable } from 'graphql-ws/lib/common'
import { BaseServerBuilder } from './BaseServerBuilder'
import { GraphQLSchema } from 'graphql'
import { Context } from '../types/Context'

export class WebSocketServerBuilder extends BaseServerBuilder {
  async build (httpServer: Server, schema: GraphQLSchema): Promise<Disposable> {
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql'
    })

    const serverCleanup = useServer(
      {
        schema,
        context: async (ctx, message, args): Promise<Context> => {
          this._logger.debug(ctx)
          // message.payload is the graphql query from client
          this._logger.debug(message)
          this._logger.debug(args)
          return { authorization: ctx.connectionParams?.authorization as string }
        },
        onConnect: async (ctx): Promise<void> => {
          // Check authentication every time a client connects.
          this._logger.debug(ctx.connectionParams)
          this._logger.info('WebSocet Connected!')
        },
        onDisconnect: (ctx, code, reason): void => {
          this._logger.debug(ctx.connectionParams)
          this._logger.info(`WebSocet Disconnected! (${code}: ${reason})`)
        }
      },
      wsServer
    )
    return serverCleanup
  }
}

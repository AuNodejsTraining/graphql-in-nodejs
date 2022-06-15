import { Server } from 'http'
import { GraphQLSchema } from 'graphql'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginInlineTrace, ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground, PluginDefinition } from 'apollo-server-core'
import { BaseServerBuilder } from './BaseServerBuilder'
import dataSources from './datasources'

export class ApolloServerBuilder extends BaseServerBuilder {
  private readonly isProduction = ApolloServerBuilder.isProductionEnv()

  landingPagePlugin () {
    return this.isProduction
      ? ApolloServerPluginLandingPageDisabled()
      // TODO: https://github.com/graphql/graphql-playground/issues/1143
      // https://www.apollographql.com/docs/apollo-server/testing/build-run-queries#graphql-playground
      : ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          'editor.theme': 'dark',
          'request.credentials': 'include'
        }
      })
  }

  async build (httpServer: Server, schema: GraphQLSchema, plugin: PluginDefinition): Promise<ApolloServer> {
    const server = new ApolloServer({
      schema,
      csrfPrevention: true,
      introspection: !this.isProduction,
      dataSources,
      plugins: [
        ApolloServerPluginInlineTrace,
        // this.landingPagePlugin(),
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),
        plugin
      ],
      context: ({ req }) => this.buildContext(req),
      formatError: (err: Error) => {
        this._logger.error(err)
        return err
      }
    })

    return server
  }
}

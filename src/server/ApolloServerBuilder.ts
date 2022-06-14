import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { BaseServerBuilder } from './BaseServerBuilder';
import { resolvers } from '../graphql/resolvers';
import { typeDefs } from '../graphql/typeDefs';

export class ApolloServerBuilder extends BaseServerBuilder {
  private readonly isProduction = ApolloServerBuilder.isProductionEnv()

  landingPagePlugin() {
    return this.isProduction
      ? ApolloServerPluginLandingPageDisabled()
      // TODO https://github.com/graphql/graphql-playground/issues/1143
      : ApolloServerPluginLandingPageGraphQLPlayground({
        settings: {
          'editor.theme': 'dark',
          'request.credentials': 'include'
        }
      })
  }

  async build(): Promise<ApolloServer> {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      introspection: !this.isProduction,
      plugins: [this.landingPagePlugin()],
      context: ({ req }) => this.buildContext(req),
      formatError: (err: Error) => {
        this._logger.error(err)
        return err
      }
    });

    return server
  }
}

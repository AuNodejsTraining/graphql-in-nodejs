import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { application } from '../graphql';
import { BaseServerBuilder } from './BaseServerBuilder';
import dataSources from './datasources'

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
      schema: application.createSchemaForApollo(),
      csrfPrevention: true,
      introspection: !this.isProduction,
      dataSources,
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

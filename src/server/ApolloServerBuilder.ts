import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { resolvers } from '../resolvers';
import { typeDefs } from '../typeDefs';
import { BaseServerBuilder } from './BaseServerBuilder';

export class ApolloServerBuilder extends BaseServerBuilder {
  landingPagePlugin() {
    return ApolloServerBuilder.isProductionEnv()
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
      plugins: [this.landingPagePlugin()],
    });

    return server
  }
}

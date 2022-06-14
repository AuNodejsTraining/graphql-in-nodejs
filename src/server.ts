import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import { isProductionEnv } from './utils';

const landingPagePlugin = () => isProductionEnv()
  ? ApolloServerPluginLandingPageDisabled()
  // TODO https://github.com/graphql/graphql-playground/issues/1143
  : ApolloServerPluginLandingPageGraphQLPlayground({
    settings: {
      'editor.theme': 'dark',
      'request.credentials': 'include'
    }
  })

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  plugins: [landingPagePlugin()]
});

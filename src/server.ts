import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground, gql } from 'apollo-server-core';
import { DocumentNode } from 'graphql';
import { isProductionEnv } from './utils';

const books: { title: string; author: string; }[] = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const typeDefs: DocumentNode = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

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
  plugins: [landingPagePlugin()]
});

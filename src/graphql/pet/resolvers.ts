import { Resolvers } from 'graphql-modules';
import { DataSources } from '../../types/DataSources';
import { Pet } from '../../types/Pet';

export const resolvers: Resolvers = {
  Query: {
    pets: (_: unknown, params: unknown, context: { dataSources: DataSources }): Promise<Pet[]> => {
      const petDs = context.dataSources.petDs
      return petDs.getPets()
    },
  },
}

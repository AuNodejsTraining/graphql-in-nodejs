import { Resolvers } from 'graphql-modules';
import { DataSources } from '../../types/DataSources';
import { Profile } from '../../types/Profile';

export const resolvers: Resolvers = {
  Query: {
    profile: (_: unknown, params: unknown, context: { dataSources: DataSources }): Promise<Profile> => {
      const profileDs = context.dataSources.profileDs
      return profileDs.getProfile()
    },
  },
}

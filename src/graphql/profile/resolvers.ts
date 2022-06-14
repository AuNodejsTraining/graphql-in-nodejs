import { Resolvers } from 'graphql-modules'
import { DataSources } from '../../types/DataSources'
import { Pet } from '../../types/Pet'
import { Profile } from '../../types/Profile'

export const resolvers: Resolvers = {
  Query: {
    profile: (parent: unknown, args: unknown, context: { dataSources: DataSources }): Promise<Profile> => {
      const profileDs = context.dataSources.profileDs
      return profileDs.getProfile()
    }
  },
  Profile: {
    pets: (_: unknown, args: unknown, context: { dataSources: DataSources }): Promise<Pet[]> => {
      const petDs = context.dataSources.petDs
      return petDs.getPets()
    }
  }
}

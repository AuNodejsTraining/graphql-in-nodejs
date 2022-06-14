import { createModule } from 'graphql-modules'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const pet = createModule({
  id: 'pet',
  typeDefs,
  resolvers
})

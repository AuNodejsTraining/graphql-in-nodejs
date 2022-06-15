import { createModule } from 'graphql-modules'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const statistics = createModule({
  id: 'statistics',
  typeDefs,
  resolvers
})

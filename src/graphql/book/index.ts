import { createModule } from 'graphql-modules'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const book = createModule({
  id: 'book',
  typeDefs,
  resolvers
})

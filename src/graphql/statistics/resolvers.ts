import { Resolvers } from 'graphql-modules'
import { pubsub } from '../pubsub'

setInterval(() => {
  pubsub.publish('STATISTICS', {
    statistics: {
      onlineUsers: Math.floor(Math.random() * 1000)
    }
  })
}, 2000)

export const resolvers: Resolvers = {
  Subscription: {
    statistics: {
      subscribe: () => pubsub.asyncIterator(['STATISTICS'])
    }
  }
}

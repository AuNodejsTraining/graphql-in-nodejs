import { Resolvers } from 'graphql-modules'
import { Book } from '../../types/Book'
import { BookInput } from '../../types/BookInput'
import { pubsub } from '../pubsub'
import { books } from './datasets'

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
    book: (_: unknown, { id }: { id: string }): Book => books.find(book => book.id === id)!
  },
  Mutation: {
    createBook: (_: unknown, { book }: { book: BookInput }): Book => {
      const newBook = { id: `book${books.length + 1}`, ...book }
      books.push(newBook)
      pubsub.publish('EVENT', { message: `New book ${newBook.id} created!` })
      return newBook
    }
  },
  Subscription: {
    event: {
      subscribe: () => pubsub.asyncIterator(['EVENT'])
    }
  }
}

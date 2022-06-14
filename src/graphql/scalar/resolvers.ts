import { GraphQLScalarType } from 'graphql';
import { Resolvers } from 'graphql-modules';
import moment from 'moment';

// https://github.com/Urigo/graphql-scalars
const DateTypeResolver = new GraphQLScalarType({
  name: 'DateType',
  parseValue (value) {
    return value
  },
  serialize (value: any) {
    return moment(new Date(value)).format('DD/MM/YYYY')
  }
})

export const resolvers: Resolvers = {
  DateType: DateTypeResolver
}

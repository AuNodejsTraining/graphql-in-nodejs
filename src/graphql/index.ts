import { createApplication } from 'graphql-modules'
import { book } from './book'
import { pet } from './pet'
import { profile } from './profile'
import { scalar } from './scalar'

export const application = createApplication({
  modules: [book, profile, pet, scalar]
})

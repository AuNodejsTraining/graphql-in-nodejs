import { createApplication } from 'graphql-modules';
import { book } from './book';
import { profile } from './profile';

export const application = createApplication({
  modules: [book, profile]
})

import { createApplication } from 'graphql-modules';
import { book } from './book';

export const application = createApplication({
  modules: [book]
})

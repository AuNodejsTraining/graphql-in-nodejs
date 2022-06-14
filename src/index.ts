import { server } from './server'

const start = (): void => {
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start()

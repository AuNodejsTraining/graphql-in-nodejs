import { buildServer } from './server'

const start = async (): Promise<void> => {
  const options = {
    port: process.env.PORT ?? 4000
  }

  const server = await buildServer()
  server.listen(options).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start()

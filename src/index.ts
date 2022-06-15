import { buildServer } from './server'

const start = async (): Promise<void> => {
  const port = process.env.PORT ?? 4000

  const server = await buildServer()
  server.listen(port, () => {
    console.log(
      `🚀  Server is now running on http://localhost:${port}`
    )
  })
}

start()

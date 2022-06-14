import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/test/'],
  modulePathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  clearMocks: true,
  verbose: true
}

export default config

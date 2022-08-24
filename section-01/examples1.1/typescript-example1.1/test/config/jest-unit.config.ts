import { cpus } from 'os'

const cpuCount = cpus().length
const maxConcurrency = cpuCount > 4 ? cpuCount - 2 : cpuCount

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '../../src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
    '@test/(.*)': '<rootDir>/../test/$1',
  },
  maxConcurrency,
  maxWorkers: maxConcurrency,
}

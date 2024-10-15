/* eslint-env node */
/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
export default {
    displayName: 'unit',
    preset: 'ts-jest/presets/default-esm',
    rootDir: './',
    roots: ['<rootDir>/src/'],
    reporters: ['default'],
    maxWorkers: process.env.CI ? 1 : '50%',
    transform: {
      '^.+\\.spec\\.[tj]sx?$': [
        'ts-jest',
        {
          useESM: true
        }
      ]
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageReporters: ['text', 'json', 'html'],
    coverageDirectory: '<rootDir>/test-results/coverage',
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100
      }
    },
    coveragePathIgnorePatterns: [
      '/node_modules/'
    ]
  }
  
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}

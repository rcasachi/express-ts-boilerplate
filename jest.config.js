module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageDirectory: 'tests/coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/routes.ts',
    '/src/app.server.ts',
    '/src/app.ts',
    '/src/bootstrap.ts',
    '/src/core/config/',
    '/src/core/database/connection.ts',
  ],
  coverageReporters: ['text'],
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.[jt]s?(x)'],
};

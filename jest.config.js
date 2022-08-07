module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(scss|less)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**/*.tsx', '!**/src/index.tsx'],
};

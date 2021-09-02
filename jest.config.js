module.exports = {
  snapshotSerializers: ['@emotion/jest/enzyme-serializer'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'babel-jest',

    '^.+\\.(css|sass|scss)$': 'babel-jest',

    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'babel-jest',

    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}


  


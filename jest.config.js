module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.d.ts"],
  watchman: false,
  watchPathIgnorePatterns: ["/node_modules/", "/dist/", "/.git/", "/coverage/"],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};

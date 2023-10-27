/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
export default {
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: "node",
};

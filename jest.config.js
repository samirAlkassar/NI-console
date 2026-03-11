const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

module.exports = async () => {
  const config = await createJestConfig(customJestConfig)();
  // We need to transpile ESM modules from msw and its dependencies
  config.transformIgnorePatterns = [
    "/node_modules/(?!(msw|until-async|@mswjs|is-node-process)/)"
  ];
  return config;
};
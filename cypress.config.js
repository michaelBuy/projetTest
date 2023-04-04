const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://wikipedia.com',
    specPattern : "**/*.feature",

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});

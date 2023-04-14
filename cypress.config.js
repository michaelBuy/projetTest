const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  reporterOptions: { 
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter', 
    mochaJunitReporterReporterOptions: { mochaFile: 'cypress/reports/junit/results-[hash].xml', }, 
    cypressMochawesomeReporterReporterOptions: { charts: true, reportPageTitle: 'WS Cypress', 
    embeddedScreenshots: false, 
    inlineAssets: true, 
    saveAllAttempts: false, }, },
  e2e: {
    baseUrl: 'https://biorius-test-6429077.dev.odoo.com/web#action=384&cids=1&menu_id=247&model=sale.order&view_type=list',
    specPattern : "**/*.feature",

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});

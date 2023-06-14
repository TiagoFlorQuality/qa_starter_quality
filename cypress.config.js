const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    ,

   e2e: {
      setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber())
      },
      specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
    },
    env: {
      country: "US", //npx cypress open --env country=US
      country: "ES", //npx cypress open --env country=ES
      country: "BR" //npx cypress open --env country=BR
    }
  }

});


const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
 e2e: {
<<<<<<< HEAD
  //specPattern: "**/*.{feature,cy.js}",
  specPattern: "**/*.feature",
  baseUrl: "https://trello.com/",
  chromeWebSecurity: false,
 // failOnStatusCode: false,
 screenshotsFolder:"BoardScreenshots",
 
=======
  specPattern: "**/*.{feature,cy.js}",
  baseUrl: "https://trello.com/",

>>>>>>> 80c1180801c16c90e00cd6d14142fdee12a9a14f
   setupNodeEvents(on, config) {
     on("file:preprocessor", cucumber());
   },
 },
 
});

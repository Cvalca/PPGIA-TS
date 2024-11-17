const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'p5x4vr',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.arenasportclub.site/',
    // Não limpa estado da tela após cada it.
    //testIsolation: false,
  },
});

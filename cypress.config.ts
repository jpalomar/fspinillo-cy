import { defineConfig } from 'cypress'
import moment from 'moment'
const currentDate = moment().format('YYYYMMDD')
const currentTime = moment().format('hhmmss')
const newEmail = `frameio-testing+${currentDate}-${currentTime}@example.com`

export default defineConfig({
  defaultCommandTimeout: 8000,
  env: {
    email: newEmail,
    pass: Math.random().toString(36).slice(2)
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
    experimentalInteractiveRunEvents: true
  },
});

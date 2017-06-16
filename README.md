# wdio-selenium-grid-setup-test

A simple web service and WebdriverIO test to help shakedown a CI setup.

## Testing locally
`npm test` with an optional `PORT` env variable. The app will start and stop automatically.

## Testing in CI
`GRID_HOST=<URI for Selenium Grid> npm run test:ci` with optional `GRID_PORT` (defaults to `4444`) and `PORT` env variables. Note the app will have to be started and stopped separately.

# dlite-web

[![Build Status](https://travis-ci.org/stateofca/dlite-web.svg?branch=master)](https://travis-ci.org/stateofca/dlite-web) [![Code Climate](https://codeclimate.com/github/stateofca/dlite-web/badges/gpa.svg)](https://codeclimate.com/github/stateofca/dlite-web) [![Test Coverage](https://codeclimate.com/github/stateofca/dlite-web/badges/coverage.svg)](https://codeclimate.com/github/stateofca/dlite-web/coverage)

## Setup

Deployed at [https://dlite-web.herokuapp.com/](https://dlite-web.herokuapp.com/).
Deploys happen automatically via github integrations. When CI passes, the deploy goes to heroku.

For development and test, the application uses `.env` files to populate
the environmental variables. And we use envars to ensure 12 factor
portability for our apps!

To setup your local environment copy the `.env.sample` file to `.env`:

    cp .env.sample .env

If setting up a non-ADA TST terminal set APP_TIMEOUT value to 180000 (3 minutes).

### Database

We are using postgres for our database. You will need to have that
installed on your development and test environments in order to develop
the application.

On a mac use Homebrew:

    brew install postgres

We are using versions ~9.6 currently.

Create the test and development databases locally with the `createdb`
utility:

    createdb dlite_web_development
    createdb dlite_web_test

Connection parameters for the local database should be setup in
`server/config/database.json`. A candidate can and should be copied from
`server/config/database.json.sample` which is checked into source
control!

Change the postgres connection parameters to match your system.

The connection prefers using `DATABASE_URL` as an environmental
variable. This allows easy portability between servers.

We are using the Knex js library for connecting to the database.

### Database migrations

Migrations are in the `server/db/migrations` directory. You can generate
new migrations via the knex CLI:

    knex migrate:make my_new_migration_name

Migrations can be run via the command:

    knex migrate:latest

Migrations should be run before testing or running the app locally in
development mode. Using the environmental variable `APP_ENV` will set
the environment so that migrations happen for that database.

## Session store

We are using redis ~3.2 currently.
Connection parameters for the local redis server should be setup in
`server/config/redis.json`. A candidate can and should be copied from
`server/config/redis.json.sample` which is checked into source control!

The connection prefers using `REDIS_URL` as an environmental
variable. This allows easy portability between servers.

Make sure to set `REDIS_TLS` to true when connecting with a secured Redis server.

## Start the app

It is just an express app, and runs via a nmp script:

    npm install
    npm start

## Testing

Unit/integration tests are via [mocha](https://mochajs.org/). If using the `assert`
module is too low level. Feel free to add in some `chai` and `sinon`.

These tests can be run via an npm script:

    `npm run test`


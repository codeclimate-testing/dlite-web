'use strict';

const path = require('path');
const migrationsPath = path.resolve(__dirname, 'server', 'db', 'migrations');

const env     = require('./server/config/env').env;
const dbUrl   = process.env.DATABASE_URL;

let fileConfig;
try {
  fileConfig = require('./server/config/database.json')[env];
} catch(e) {
  if (!dbUrl) {
    throw new Error(
      `No database connection file found at server/config/database.json for ${env}`
    );
  }
}

let config = {
  client: 'pg',
  connection: dbUrl + 'ssl=true',
  migrations: {
    directory: migrationsPath
  }
};

if (!config.connection) {
  config.connection = fileConfig;
}

module.exports = config;


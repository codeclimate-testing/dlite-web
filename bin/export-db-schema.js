'use strict';

const fs = require('fs');
const PostgresSchema = require('pg-json-schema-export');
const connectionConfig = require('../knexfile').connection;

const schemaPath = __dirname + '/../server/db/schema.json';

PostgresSchema.toJSON(connectionConfig, 'public')
  .then(function (schemas) {
    fs.writeFileSync(schemaPath, JSON.stringify(schemas, null, 2));
    process.exit();
  })
  .catch(function (error) {
    console.log(error);
    process.exit();
  });

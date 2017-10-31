'use strict';

const knex    = require('knex');
const config  = require('../../knexfile');

module.exports = function connect() {
  return knex(config);
};

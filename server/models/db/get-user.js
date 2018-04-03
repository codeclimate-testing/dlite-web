'use strict';

const db = require('../../db/connect')();

const returnFirst = (records) => {
  return records[0];
};

exports.byUuid = (uuid) => {
  return db('users')
    .where('uuid', uuid)
    .then(returnFirst);
};

exports.byId = (id) => {
  return db('users')
    .where('id', id)
    .then(returnFirst);
};



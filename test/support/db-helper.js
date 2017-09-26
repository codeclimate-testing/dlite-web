'use strict';

const db = require('../../server/db/connect')();
const dataHelper = require('./data-helper');

function clearAll() {
  return db('applications').truncate()
    .then(() => {
      return db('addresses').truncate()
    })
    .then(() => {
      return db('emails').truncate()
    })
    .then(() => {
      return db('phone_numbers').truncate()
    });
}

function insertClientData() {
  
}

module.exports = {
  db: db,
  clearAll: clearAll,
  insertClientData: insertClientData,
};

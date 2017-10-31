'use strict';

const db = require('../../db/connect')();

module.exports = function createApplication(data) {
  let returnedData = {};

  function insert(key) {
    return db(key).insert(data[key]).returning('*');
  }

  return db('applications').insert(data.application).returning('*')
    .then((records) => {
      returnedData.application = records[0];
      return insert('addresses');
    })
    .then((records) => {
      returnedData.addresses = records;
      return insert('emails');
    })
    .then((records) => {
      returnedData.emails = records;
      return insert('phone_numbers');
    })
    .then((phoneNumbers) => {
      returnedData.phone_numbers = phoneNumbers;
      return returnedData;
    });
};

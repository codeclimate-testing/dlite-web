'use strict';

const db = require('../../db/connect')();

module.exports = function createApplication(data) {
  let returnedData = {};

  function aggregateAndInsertNext(previousKey, newKey) {
    return function handler(record) {
      returnedData[previousKey] = record;
      return db(newKey)
        .insert(data[newKey])
        .returning('*');
    };
  }

  return db('applications').insert(data.applications).returning('*')
    .then(aggregateAndInsertNext('application', 'addresses'))
    .then(aggregateAndInsertNext('addresses', 'emails'))
    .then(aggregateAndInsertNext('emails', 'phone_numbers'))
    .then((phoneNumbers) => {
      returnedData.phone_numbers = phoneNumbers;
      return returnedData;
    });
};

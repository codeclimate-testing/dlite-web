'use strict';

const db = require('../../db/connect')();

module.exports = function createApplication(data) {
  let returnedData = {};
  return db('applications').insert(data.applications).returning('*')
    .then((application) => {
      returnedData.application = application;
      return db('addresses')
        .insert(data.addresses)
        .returning('*');
    })
    .then((addresses) => {
      returnedData.addresses = addresses;
      return db('emails')
        .insert(data.emails)
        .returning('*');
    })
    .then((emails) => {
      returnedData.emails = emails;
      return db('phone_numbers')
        .insert(data.phone_numbers)
        .returning('*');
    })
    .then((phoneNumbers) => {
      returnedData.phone_numbers = phoneNumbers;
      return returnedData;
    });
};

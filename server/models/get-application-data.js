'use strict';

const db = require('../db/connect')();

module.exports = function getApplicationData(id) {
  return db('applications')
    .select()
    .join('addresses',     'applications.id', 'addresses.resident_id')
    .join('emails',        'applications.id', 'emails.resident_id')
    .join('phone_numbers', 'applications.id', 'phone_numbers.resident_id')
    .where('applications.id', id)
    .then((records) => { return records[0]; });
};

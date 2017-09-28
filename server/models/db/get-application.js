'use strict';

const db = require('../../db/connect')();

module.exports = function getApplication(id) {
  let aggregate = {};

  return Promise.all([
    db('applications').where('id', id)
      .then((records) => { aggregate.application = records[0]; }),
    db('addresses').where('application_id', id)
      .then((records) => { aggregate.addresses = records; }),
    db('emails').where('application_id', id)
      .then((records) => { aggregate.emails = records; }),
    db('phone_numbers').where('application_id', id)
      .then((records) => { aggregate.phone_numbers = records; }),
  ]).then(() => {
    if (!aggregate.application) { return undefined; }
    return aggregate;
  });
};

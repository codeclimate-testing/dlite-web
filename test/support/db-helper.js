'use strict';

const db = require('../../server/db/connect')();

function clearAll() {
  return db('applications').truncate()
    .then(() => {
      return db('addresses').truncate();
    })
    .then(() => {
      return db('emails').truncate();
    })
    .then(() => {
      return db('phone_numbers').truncate();
    })
    .then(() => {
      return db('card_histories').truncate();
    })
    .then(() => {
      return db('card_options').truncate();
    })
    .then(() => {
      return db('cards').truncate();
    })
    .then(() => {
      return db('license_classes').truncate();
    })
    .then(() => {
      return db('license_issues').truncate();
    })
    .then(() => {
      return db('medical_histories').truncate();
    })
    .then(() => {
      return db('organ_donations').truncate();
    })
    .then(() => {
      return db('previous_names').truncate();
    })
    .then(() => {
      return db('renewal_card').truncate();
    })
    .then(() => {
      return db('veterans_info').truncate();
    })
    .then(() => {
      return db('voting_registrations').truncate();
    })
    .then(() => {
      return db('users').truncate();
    })
    .then(() => {
      return db('guardian_signatures').truncate();
    })
    .then(() => {
      return db('guardian_addresses').truncate();
    });
}

module.exports = {
  db: db,
  clearAll: clearAll
};

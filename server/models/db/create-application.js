'use strict';

const db = require('../../db/connect')();

module.exports = function createApplication(data) {
  let returnedData = {};

  function insert(key) {
    return db(key).insert(data[key]).returning('*');
  }

  return db('applications').insert(data.application).returning('*')
    .then((application) => {
      returnedData.application = application[0];
      return insert('addresses');
    })
    .then((addresses) => {
      returnedData.addresses = addresses;
      return insert('emails');
    })
    .then((emails) => {
      returnedData.emails = emails;
      return insert('phone_numbers');
    })
    .then((phoneNumbers) => {
      returnedData.phone_numbers = phoneNumbers;
      return insert('organ_donations');
    })
    .then((organDonations) => {
      returnedData.organ_donations = organDonations[0];
      return insert('card_histories');
    })
    .then((cardHistories) => {
      returnedData.card_histories = cardHistories;
      return insert('previous_names');
    })
    .then((previousNames) => {
      returnedData.previous_names = previousNames;
      return insert('medical_histories');
    })
    .then((medicalHistories) => {
      returnedData.medical_histories = medicalHistories;
      return insert('license_issues');
    })
    .then((licenseIssues) => {
      returnedData.license_issues = licenseIssues;
      return insert('veterans_info');
    })
    .then((veteransInfo) => {
      returnedData.veterans_info = veteransInfo[0];
      return insert('voting_registrations');
    })
    .then((votingRegistrations) => {
      returnedData.voting_registrations = votingRegistrations[0];
      return returnedData;
    })
};

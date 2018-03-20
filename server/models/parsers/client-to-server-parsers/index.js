'use strict';

const application         = require('./extract-application');
const addresses           = require('./extract-addresses');
const email               = require('./extract-emails');
const phoneNumber         = require('./extract-phone-number');
const organDonation       = require('./extract-organ-donations');
const cardHistories       = require('./extract-card-data');
const previousNames       = require('./extract-previous-names');
const medicalHistories    = require('./extract-medical-histories');
const licenseIssues       = require('./extract-license-issues');
const veteransInfo        = require('./extract-veterans-info');
const votingRegistrations = require('./extract-voting-registrations');
const cardTypes           = require('./extract-cards');
const cardOptions         = require('./extract-card-options');
const licenseClasses      = require('./extract-license-classes');

module.exports = {
  application,
  addresses,
  email,
  phoneNumber,
  organDonation,
  cardHistories,
  previousNames,
  medicalHistories,
  licenseIssues,
  veteransInfo,
  votingRegistrations,
  cardTypes,
  cardOptions,
  licenseClasses
};
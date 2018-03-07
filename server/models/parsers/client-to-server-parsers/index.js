'use strict';

const application       = require('./extract-application');
const addresses         = require('./extract-addresses');
const email             = require('./extract-emails');
const phoneNumber       = require('./extract-phone-number');
const organDonation     = require('./extract-organ-donations');
const cardHistories     = require('./extract-card-histories');
const previousNames     = require('./extract-previous-names');
const medicalHistories  = require('./extract-medical-histories');
const licenseIssues     = require('./extract-license-issues');
const veteransInfo      = require('./extract-veterans-info');
const voting            = require('./extract-voting-registrations');
const cards             = require('./extract-cards');
const cardOptions       = require('./extract-card-options');
const licenseClasses    = require('./extract-license-classes');

module.exports = {
  application           : application,
  addresses             : addresses,
  email                 : email,
  phoneNumber           : phoneNumber,
  organDonation         : organDonation,
  cardHistories         : cardHistories,
  previousNames         : previousNames,
  medicalHistories      : medicalHistories,
  licenseIssues         : licenseIssues,
  veteransInfo          : veteransInfo,
  votingRegistrations   : voting,
  cardTypes             : cards,
  cardOptions           : cardOptions,
  licenseClasses        : licenseClasses
};
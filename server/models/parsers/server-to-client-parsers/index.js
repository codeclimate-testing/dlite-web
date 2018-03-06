'use strict';

const language            = require('./get-language');
const legalName           = require('./get-legal-name');
const dateOfBirth         = require('./get-date-of-birth');
const address             = require('./get-address');
const physicalTraits      = require('./get-physical-traits');
const heightAndWeight     = require('./get-height-and-weight');
const socialSecurity      = require('./get-social-security');
const IDApp               = require('./get-id-app');
const DLApp               = require('./get-dl-app');
const realID              = require('./get-real-id');
const organDonations      = require('./get-organ-donations');
const licenseAndIdHistory = require('./get-license-and-id-history');
const namesHistories      = require('./get-names-histories');
const medicalHistories    = require('./get-medical-histories');
const licenseIssues       = require('./get-license-issues');
const veteransService     = require('./get-veterans-service');
const citizenStatus       = require('./get-citizen-status');
const ballotByMail        = require('./get-ballot-by-mail');
const eligibility         = require('./get-eligibility');
const party               = require('./get-party');
const optedOut            = require('./get-opted-out');
const contactMethods      = require('./get-contact-methods');


module.exports = {
  language,
  legalName,
  dateOfBirth,
  address,
  physicalTraits,
  heightAndWeight,
  socialSecurity,
  IDApp,
  DLApp,
  realID,
  organDonations,
  licenseAndIdHistory,
  namesHistories,
  medicalHistories,
  licenseIssues,
  veteransService,
  citizenStatus,
  ballotByMail,
  eligibility,
  party,
  optedOut,
  contactMethods
};
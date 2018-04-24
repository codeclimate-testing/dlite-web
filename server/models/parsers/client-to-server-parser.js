'use strict';
const cardTypeParser        = require('./card-type');
const extract               = require('./client-to-server-parsers/index');

function parse(data, ip) {
  let parsedData = Object.assign(
    {},
    { application:            extract.application(data, ip) },
    { addresses:              extract.addresses(data) },
    { emails:                 extract.email(data) },
    { phone_numbers:          extract.phoneNumber(data) },
    { organ_donations:        extract.organDonation(data) },
    { card_histories:         extract.cardHistories(data) },
    { previous_names:         extract.previousNames(data) },
    { medical_histories:      extract.medicalHistories(data) },
    { license_issues:         extract.licenseIssues(data) },
    { veterans_info:          extract.veteransInfo(data) },
    { voting_registrations:   extract.votingRegistrations(data) },
    { cards:                  extract.cardTypes(data) },
    { card_options:           extract.cardOptions(data) },
    { license_classes:        extract.licenseClasses(data) },
    { guardian_signatures:    extract.guardianSignatures(data) },
    { guardian_addresses:     extract.guardianAddresses(data) }
  );

  return parsedData;
}


module.exports = parse;

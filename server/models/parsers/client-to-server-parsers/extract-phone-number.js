'use strict';

function extractPhoneNumber(data) {
  if (data.voting.contactMethods.phoneNumber1 || data.voting.contactMethods.phoneNumber2 || data.voting.contactMethods.phoneNumber3) {
    return {
      application_id:   data.id,
      number:           data.voting.contactMethods.phoneNumber1 + data.voting.contactMethods.phoneNumber2 + data.voting.contactMethods.phoneNumber3
    };
  }
  return null;
}

module.exports = extractPhoneNumber;
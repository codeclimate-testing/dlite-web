'use strict';

function extractEmail(data) {
  let email = data.voting.contactMethods.emailAddress;
  if(email) {
    return {
      application_id:   data.id,
      address:          email
    };
  }
  return null;
}

module.exports = extractEmail;